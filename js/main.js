// length
// 1
// let txt = 'salom'
// console.log(txt.length);
// 2
// let txt = 'aziz'
// console.log(txt.length);
// 3
// let txt ='aziz aziz azizi'
// console.log(txt.length);
// 4
// let txt = 'naurizzzzzzzzzzzzzzzzzzzzzxzzzzzzzzzzz'
// console.log(txt.length);
// 5
// let txt = 'mexanizmlashtirilganlardan'
// console.log(txt.length);
// charAt
// 1
// let txt = 'salom dunyo' 
// console.log(txt.charAt(4));
// 2
// let txt = 'salom aziz'
// console.log(txt.charAt(8));
// 3
// let txt = 'mexanizmlashtirish'
// console.log(txt.charAt(14));
// 4
// let txt = 'shuhratttttt'
// console.log(txt.charAt(0));
// 5
// let txt = 'salom woldd'
// console.log(txt.charAt(5));
// concat 
// 1
// let txt = 'salom dunyo salom dunyoo'
// let txt2 = 'ssssssssssss'
// console.log(txt.concat('       ', txt2));
// 2
// let txt = 'salom'
// let txt2 = 'duny0o'
// console.log(txt2.concat ('   ', txt));
// 3
// let txt = 'salom'
// let txt2 = 'dunyo'
// console.log(txt.concat ('   ', txt2));
// 4
// let txt = 'salom'
// let txt2 = 'wold'
// console.log(txt.concat ('   ', txt2));
// 5
// let txt = 'Wello'
// let txt2 = 'dunyo'
// console.log(txt.concat ('   ', txt2));
// includes
//1
// let txt = 'salom dunyo'
// console.log(txt.includes('dunyo'));
//2
//let txt = 'hello world'
// console.log(txt.includes('yello'));
//3
// let txt = 'salom'
// console.log(txt.includes('s'));
//4
// let ttx = 'sssa'
// console.log(ttx.includes('e'));
//5
// let ttx = 'aziz'
// console.log(ttx.includes('shuhr at'));
//index of
//1
// let txt = 'salom dunyo'
// console.log(txt.indexOf("salom"));
//2
// let txt = 'salom salom'
// console.log(txt.indexOf('salom'));
//3
// let txt = 'salom dunyo salom'
// console.log(txt.indexOf('alom'));
//4
// let txt = 'dunyo salom'
// console.log(txt.indexOf('qalom'));
//5
// let txt = ' dunyo salom'
// console.log(txt.indexOf('y'));
//lastindexof
//1
// let txt = 'javascriptjavascript'
// console.log(txt.lastIndexOf('javascript'));
//2
// let txt = 'superman superman'
// console.log(txt.lastIndexOf('supreme'));
//3
// let txt = 'aziz menen aziz'
// console.log(txt.lastIndexOf('aziz'));
//4
// let txt = 'salom dunyo'
// console.log(txt.lastIndexOf('o'));
//5
// let txt = 'salom dunyo'
// console.log(txt.lastIndexOf('qwery'));
//slice
//1
// let txt = 'HEllo World'
// console.log(txt.slice(5, 11));
//2
// let txt = 'salom dunyo'
// console.log(txt.slice(6,11));
//3
// let txt = 'salom aziz'
// console.log(txt.slice(0,5));
//4
// let txt = 'aziz salom'
// console.log(txt.slice(0,5));
//5
// let txt = 'nauriz salom'
// console.log(txt.slice(6,12));
//substring
//1
// let txt = 'salom DUNYO'
// console.log(txt.substring('4,11'));
//2
// let txt ='dunyo'
// console.log(txt.substring(1,3));
//3
// let txt = 'salomm uzbekistan'
// console.log(txt.substring(0,10));
//4
// let txt = 'salomm karaqalpakistan'
// console.log(txt.substring(0,17));
//5
// let txt = 'salomm '
// console.log(txt.substring(0,4));
//substr
// 1
// let txt = 'salom dunyo'
// console.log(txt.substr(6,5));
// 2
// let txt = 'assalomualeykum'
// console.log(txt.substr(0,7));
// 3
// let txt = 'hello world'
// console.log(txt.substr(0,5));
// 4
// let txt = 'salom world'
// console.log(txt.substr(6,5));
// 5
// let txt = 'salom world'
// console.log(txt.substr(0,5));
//toUpperCase
//1
// let txt = 'salom'
// console.log(txt.toUpperCase());
//2
// let txt = 'shuhrat'
// console.log(txt.toUpperCase());
///3
// let txt = 'aziz'
// console.log(txt.toUpperCase());
//4
// let txt = 'itkumgaraf'
// console.log(txt.toUpperCase());
//5
// let txt = 'shuhrat'
// console.log(txt.toUpperCase());
//toLowerCase
///1
// let txt = 'SALOM'
// console.log(txt.toLowerCase());
//2
// let  txt = 'HELLO WORLD'
// console.log(txt.toLowerCase());
//3
// let  txt = ' WORLD'
// console.log(txt.toLowerCase());
//4
// let  txt = 'HELLO'
// console.log(txt.toLowerCase());
//5
// let  txt = 'QWERT'
// console.log(txt.toLowerCase());
//trim
//1t
// let txt = '    salom     '
// console.log(txt.trim());
//2
// let txt = '                              sunyoo    '
// console.log(txt.trim());
//3
// let txt = '       dunyoo    '
// console.log(txt.trim());
//4
// let txt = '      dunyoo    '
// console.log(txt.trim());
//5
// let txt = '       wolrd    '
// console.log(txt.trim());
//split
//1
// let txt = 'salom, dunyo, dnyo'
// console.log(txt.split(","));
//2
// let txt = "assalomu. aleykum"
// console.log(txt.split("."));
//3
// let txt = "hello, world"
// console.log(txt.split(","));
///4
// let txt = "salom, saloom"
// console.log(txt.split(","));
//5
// let txt = "salom, saloom"
// console.log(txt.split(","));
//replace
//1
// let txt = 'salom dunyo'
// let txt1= txt.replace('salom', 'hello' ) 
// console.log(txt1);
//2
// let header = 'hello world'
// let ozgartirish = header.replace('hello world','salom dunyo')
// console.log(ozgartirish);
//3
// let txt = 'hello dunyo'
// let txt2 = txt.replace('dunyo', 'world')
// console.log(txt2);//4
// let txt = 'hello dunyo'
// let txt2 = txt.replace('hello', 'salom')
// console.log(txt2);
//5
// let txt = 'hello dunyo'
// let txt2 = txt.replace('hello', 'salom',)
// let txt3= txt2.replace('dunyo', 'world' )
// console.log( txt3);
//repaet
//1
// let txt = 'salom'
// console.log(txt.repeat(11));
//2
// let txt = 'ha'
// console.log(txt.repeat(11));
//3
// let txt = 'hello '
// console.log(txt.repeat(3));

//4
// let txt = 'world '
// console.log(txt.repeat(3));
//5
// let txt = 'hello '
// console.log(txt.repeat(3));



