const quotes = [
    {
        quote : "늘 하던 대로 하면 늘 얻던 것을 얻는다.",
        author : "미상"
    },
    {
        quote : "열정을 잃지 않고 실패에서 실패로 걸어가는 것이 성공이다.",
        author : "윈스턴 처칠"
    },
    {
        quote : "괴로운 시련처럼 보이는 것이 뜻밖의 좋은 일일 때가 많다.",
        author : "오스카 와일드"
    },
    {
        quote : "성공이란 당신 자신, 당신이 하는 일, 그 일을 하는 방식을 좋아하는 것이다.",
        author : "마야 앤젤루"
    },
    {
        quote : "절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다.",
        author : "L.론허바드"
    },
    {
        quote : "행복은 습관이다,그것을 몸에 지니라.",
        author : "허버드"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todayQuote.quote;
author.innerText = `-${todayQuote.author}-`;