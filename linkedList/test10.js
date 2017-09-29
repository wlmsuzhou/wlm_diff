function getResult(n,i,j) {
	var result = 0;
	var x = j;
	var y = i;
	var a = n/2;
	if (n%2==0) {
		if (x>a)
			x = 1+(n-x);
		if(y>a)
			y=1+(n-y);
		} else {
			if (x>a+1)
				x=1+(n-x);
			if (y>a+1)
				y=1+(n-y);
		}
	var ceng = x<y?x:y;
	x = 1;y=1;
	var p=1;
	for (var m=1;m<ceng;m++) {
		p+=4*(n-1);
		n-=2;
		x++;
		y++;
	}
	if(y==i)  
	{  
	    p+=j-x;  
	    return p;
	}  
	p+=n-1;  
	x+=n-1;  
	if(x==j)  
	{  
	    p+=i-y;  
	    return p;
	}  
	p+=n-1;  
	y+=n-1;  
	if(y==i)  
	{  
	    p+=x-j;  
	    return p;
	}  
	p+=n-1;  
	x-=n-1;  
	if(x==j)  
	{  
	    p+=y-i;  
	    return p; 
	}  
	return result;
}
var arr = read_line().split(' ');
var n = parseInt(arr[0]);
var i = parseInt(arr[1]);
var j = parseInt(arr[2]);
console.log(getResult(n,i,j));