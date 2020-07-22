(ns app.todolist
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [clojure.string :as str]))

(defonce todos (r/atom (sorted-map)))
(defonce counter (r/atom 0))

(defn delete [id] (swap! todos dissoc id))
(defn save [id title] (swap! todos assoc-in [id :title] title))
(defn toggle [id] (swap! todos update-in [id :done] not))

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
               :id id :class class :placeholder placeholder
               :on-blur save
               :on-change #(reset! val (-> % .-target .-value))
               :on-key-down #(case (.-which %)
                               13 (save)
                               27 (stop)
                               nil)}])))

(def todo-edit (with-meta todo-input
                 {:component-didmount #(.focus (rdom/dom-node %))}))

(defn todo-item []
  (let [editing (r/atom false)]
    (fn [{:keys [id done title]}]
      [:li {:class (str (if done "completed ")
                        (if @editing "editing"))}
       [:div.view
        [:input.toggle {:type "checkbox" :checked done :on-change #(toggle id)}]
        [:label {:on-double-click #(reset! editing true)} title]
        [:button.destroy {:on-click #(delete id)}]]
       (when @editing
         [todo-edit {:class "edit" :title title
                     :on-save #(save id %)
                     :on-stop #(reset! editing false)}])])))

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
