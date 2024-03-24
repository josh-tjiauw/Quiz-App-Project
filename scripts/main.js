var $viewNodeList = document.getElementsByClassName('view')

var $dataViewNodeList = [];
for (let i = 0; i < $viewNodeList.length; i++) {
  var dvnode = $viewNodeList[i].getAttribute('data-view');
  $dataViewNodeList.push(dvnode);
}

function viewSwap(dataview) {
    for (let i = 0; i < $viewNodeList.length; i++) {
      if (dataview !== $dataViewNodeList[i]) {
        $viewNodeList[i].className = 'view hidden';
      } else {
        $viewNodeList[i].className = 'view';
        data.view = $dataViewNodeList[i];
      }
    }
  }

  viewSwap('home');