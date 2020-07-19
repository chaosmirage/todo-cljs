(ns app.todolist
  (:require [reagent.core :as r]
            [clojure.string :as str]))

(defonce todos (r/atom (sorted-map)))

(defonce counter (r/atom 0))

(defn delete [id] (swap! todos dissoc id))

(defn add-todo [text]
  (let [id (swap! counter inc)]
    (swap! todos assoc id {:id id :title text :done false})))

(defn todo-input [{:keys [title on-save on-stop]}]
  (let [val (r/atom title)
        stop #(do (reset! val "")
                  (if on-stop (on-stop)))
        save #(let [v (-> @val str str/trim)]
                (if-not (empty? v) (on-save v))
                (stop))]
    (fn [{:keys [id class placeholder]}]
      [:input {:type "text" :value @val
               :id id :class class :placehodler placeholder
               :on-blur save
               :on-change #(reset! val (-> % .-target .-value))
               :on-key-down #(case (.-which %)
                               13 (save)
                               27 (stop)
                               nil)}])))

(defn todo-item []
  (let [editing (r/atom false)]
    (fn [{:keys [id done title]}]
      [:li {:class (str (if done "completed ")
                        (if @editing "editing"))}
       [:div.view
        [:label {:on-double-click #(reset! editing true)} title]
        [:button.destroy {:on-click #(delete id)}]]])))

(defn todolist [props]
  (js/console.log "props" props)
  (let [items (vals @todos)]
    [:div
     [:section#todoapp
      [:header#header
       [:h1 "todos"]
       [todo-input {:id "new-todo"
                    :placeholder "What needs to be done?"
                    :on-save add-todo}]]
      (when (-> items count pos?)
        [:div
         [:section#main
          [:ul#todo-list
           (for [todo items]
             ^{:key (:id todo)} [todo-item todo])]]]
        )]]))
