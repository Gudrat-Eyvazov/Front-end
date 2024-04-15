// var arr =[4,5,2,1,5,2,5,3,5,6,2,1,6,2,6,2,6,3,2,7,4,6,4,5,6,2,5,6,3,7,3,7]
// var say = 0;
// for(var i=0;i<arr.length;i++)
// {
//     if(arr[i]==5)
//     {
//         say++;
//     }

// }
// console.log(say)


// var cem =0;
// for(i=0;i<arr.length;i++)
// {
//        cem+=arr[i];
// }
// console.log(cem)



// var a = arr[0];
// for(i=0;i<arr.length;i++)
// {
//     if(arr[i]>a)
//     {
//     a=arr[i]
//     }
// }
// console.log(a);

// var sert =0;
// for(i=0;i<arr.length;i++)
// {
//     if(arr[i]>sert)
//     {
//         sert=arr[i];
//     }

// }
// console.log(sert);

// var count=0;
// for(i=0;i<arr.length;i++)
// {
//     if(arr[i]==sert)
//     {
//         count++;
//     }
// }
// console.log(count);

   var arr2 = [
    {
    name:'test',
    key:1
    },
    {
    name:'task',
    key:2
    },
    {
    name:'tanqo',
    key:3
    },
    {
    name:'like',
    key:4
    },
    {
    name:'task',
    key:5
    },
    {
    name:'trust',
    key:6
    },
    {
    name:'test',
    key:7
    },
    {
    name:'last',
    key:8
    },
    {
    name:'tanqo',
    key:9
    },
    {
    name:'elephant',
    key:10
},
{
name:'love',
key:11
},
{
name:'small',
key:12
},
{
name:'little',
key:13
},
]


// var arrt=[];
// for(var i=0;i<arr2.length;i++)
// {
//     if(arr2[i].name[0]=='t')
//     {
//         arrt.push(arr2[i])
//     }
// }
// console.log(arrt)


// var arrsay=0;
// for(var i=0;i<arr2.length;i++)
// {
//     if(arr2[i].name[0]=='t'&&arr2[i].name.endsWith("t"))
//     {
//         arrsay++;
//     }
// }
// console.log(arrsay)


// var arrkey=0;
// for(var i=0;i<arr2.length;i++)
// {
//     if(arr2[i].name[0]=='t'&&arr2[i].name.endsWith("t"))
//     {
//         arrkey+=arr2[i].key
//     }
// }
// console.log(arrkey)



// for(var i=0;i<arr2.length;i++)
// {
//     if(arr2[i].name.endsWith("e"))
//     {
//         arr2[i].name="superdev"
//     }
//     console.log(arr2[i])
// }\



// var enuzun=arr2[0].name.length
// for(var i=0;i<arr2.length;i++)
// {
//     if(enuzun<arr2[i].name.length)
//     {
//         enuzun=arr2[i].key
//     }
    
// }
// console.log(enuzun)


var enuzun=arr2[0].name.length
for(var i=0;i<arr2.length;i++)
{
    if(enuzun<arr2[i].name.length)
    {
        enuzun=[i].key
    }
    
}
var kvadrati= enuzun*enuzun
console.log(kvadrati)



// var ilksetir = document.getElementById("basliq")
// ilksetir.innerHTML="hello";
// ilksetir.style.fontSize="52px"
// ilksetir.style.color="red";

// var elmentler=document.getElementById("elementsayi")
// for(i=0;i<10;i++)
// {
//   var duzulus= document.createElement("h1");
//   duzulus.innerText=i
//   elmentler.appendChild(duzulus)
// }