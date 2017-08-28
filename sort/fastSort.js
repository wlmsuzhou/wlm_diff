function fastSort (arr, low, high) {
	var key = arr[low];
	while (low < high) {
		while (key <= arr[high] && low<high) {
			high --;
		}
		arr[low] = arr[high];
		while (key>=arr[low] && low<high) {
			low++;
		}
		arr[high] = a[low];
	}
	arr[hi] = key;
	return hi;
}

function sort (arr, low, high) {
	if (high < low) {
		return;
	}
	var index = fastSort(arr,low,high);
	sort(arr, low, index -1);
	sort(arr, index+1, high);
}