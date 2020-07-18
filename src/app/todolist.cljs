(ns app.todolist
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [clojure.string :as str]))

(defonce todos (r/atom (sorted-map :1 { :id 1 :title "Vasya"}, :2 { :id 2 :title "Petya"})))

(defn todolist [props]
  (js/console.log "props" props)
  (let [items (vals @todos)]
  [:ul
   (for [todo items]
     ^{:key (:id todo)} [:li (:title todo)])]))
