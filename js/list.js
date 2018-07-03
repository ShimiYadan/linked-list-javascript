/*
Author: Shimi Yadan
Date: 3.7.2018

This is a one direction connected list, which you can
insert, delete, print and get more information about
this list.

*/
function List() {

  this.root = null;

  // add new node into list
  this.insert = function (value) {
    if (this.root == null) {
      this.root = new Node(value);
      this.root.next(null);
    }
    else {
      const newRoot = new Node(value);
      newRoot.next(this.root);
      this.root = newRoot;
    }
  } // END INSERT

  // Delete from the end function
  this.deleteNode = function (value) {

    var list = new List();
    var newList = new List();
    var tmpRoot = this.root;


    // delete the first element value
    while (tmpRoot != null) {
      if (tmpRoot.value != value) {
        list.insert(tmpRoot.value);
        tmpRoot = tmpRoot.next;
      }
      else {
        tmpRoot = tmpRoot.next;
        break;
      }
    }

    // continue fill the list
    while(tmpRoot != null){
        list.insert(tmpRoot.value);
        tmpRoot = tmpRoot.next;
    }

    // reverse the list
    while (list.root != null) {
      newList.insert(list.root.value);
      list.root = list.root.next;
    }

    this.root = newList.root;
  } // END DELETE

  // get size
  this.getSize = function () {

    var tmpRoot = this.root;
    var i = 0;

    while (tmpRoot != null) {
      i++;
      tmpRoot = tmpRoot.next;
    }
    return i;
  } // END GET_SIZE

  // get node by index
  this.getNode = function (index) {

      var tmpRoot = this.root;

      for (var i = 0; i <= index; i++) {
        if(i == index) return tmpRoot.value;
        tmpRoot = tmpRoot.next;
      }
  }

  // print values
  this.print = function () {

    var tmpRoot = this.root;

    while (tmpRoot != null) {
      document.write(tmpRoot.value + ' ');
      tmpRoot = tmpRoot.next;
    }
    document.write('<br>');
  }// END PRINT

  // merge a list into current list
  this.mergeLists = function(list_to_merge) {
    var list = new List();

    for(var i = list_to_merge.getSize()-1; i >= 0; i--){
        list.insert(list_to_merge.getNode(i));
    }
    for(var i = this.getSize()-1; i >= 0; i--){
        list.insert(this.getNode(i));
    }

    this.root = list.root;
  }

} // END LIST CLASS



