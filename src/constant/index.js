export const STOCK_CODE = (function(){
	const prefix = '60';
	cosnt arr = [];
	for(let i = 0; i < 4000; i++){
		const str = i.toString();
		if(str.length == 1){
			str = '000' + str;
		}else if(str.length == 2){
			str = '00' + str;
		}else if(str.length == 3){
			str = '0' + str;
		}
		arr.push(prefix + str);
	}
	return arr;
})();
