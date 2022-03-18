function sortUnordoredLists() {
  const lists = document.querySelectorAll("ul");

  for (const list of lists) {
    const id = list.id;
    const nodeList = document.querySelectorAll(`#${id} li`);

    const sortedItems = Array.from(nodeList.values())
      .map((node) => node.innerHTML)
      .sort();

    for (let i = 0; i < sortedItems.length; i++) {
      nodeList[i].innerHTML = sortedItems[i];
    }
  }
}

sortUnordoredLists();
