---
title: Metody tablicowe w JavaScript
cover: ./cover.png
date: 2021-01-22
---

Znajomość i umiejętność poprawnego wykorzystania metod tablicowych znacząco ułatwia pracę
oraz niejednokrotnie pozwala na bardziej czytelny i zwięzły kod. W tym artykule postaram się 
przedstawić najważniejsze z nich na konkretnych przykładach. Zaczynajmy!

## filter()

Ta metoda jest nieoceniona, gdy chcemy ograniczyć elementy w tablicy. Na przykład chcemy 
zwrócić tylko wykonane zadania, użytkowników, którzy mają wykupione konto premium lub pracowników zarabiających 
więcej niż jakaś kwota.

```javascript
// zwróci liczby większe niż 100
[1, 2, 200, 5460, 45, 123].filter(number => number > 100)

// zwróci użytkowników, których imię zaczyna się na 'P'
users.filter(user => user.name[0] === 'P')

// zwróci tylko wykonane zadania
tasks.filter(task => task.completed)

// zwróci pracowników o pensji większe niż 4000
workers.filter(worker => worker.salary >= 4000)
```

## includes()

Pozwala ona w prosty sposób na sprawdzenie czy tablica zawiera jakąś wartość. Zwraca odpowiednią wartość logiczną w zależności czy 
znaleziono daną wartość. 

Pierwszy argument to szukana wartość, drugi jest opcjonalny i pozwala określić indeks od którego zaczniemy przeszukiwać. Warto także 
zapamiętać, że wielkość liter ma znaczenie w przypadku tekstu.

```javascript
[1, 2, 3, 4, 5].includes(5)

// zwróci false, gdyż 'a' i 'A' to dwa różne znaki
['A', 'B', 'C', 'D'].includes('a')

// zwróci false, gdyż zaczynamy szukać od indeksu 3
[1, 2, 3, 4, 5].includes(1, 3)

// zwróci false, gdyż oba teskty muszą być identyczne
['apple', 'orange', 'melon'].includes('appl')
```

## map()

Bardzo przydatna metoda, która pozwala nam na przekształcenie istniejącej tablicy w nową. 

Na przykład mamy tablicę zawierajacą dane o użytkownikach, lecz potrzebujemy tylko ich imiona. 
Dzięki tej metodzie, możemy przekształcić ją na tablice zawierającą tylko to co chcemy.

```javascript
// zwróci nową tablicę, zawierającą kwadraty liczb ze starej tablicy
[1, 2, 3, 4, 5].map(number => number ** 2)

// tylko imiona użytkowników
const names = users.map(user => user.name)

// zamieni wszystkie elementy na liczby (lub NaN)
['1', '2', '3'].map(Number)

// przydatne w React, gdy chcemy wyrenderować elementy w tablicy
tasks.map(task => <li>{task.title}</li>)
```

## join()

Bardzo prosta metoda umożliwiająca zamianę tablice na ciąg znaków. Łączy wszystkie elementy 
podanym tekstem (jeżeli nie podamy nic, będzie to przecinek).

```javascript
// zwróci tekst '1 - 2 - 3'
[1, 2, 3].join(' - ')

// łączy wszytskie tagi kropką
const tags = ['CSS', 'JavaScript', 'React']
tags.join(' • ') // 'CSS • JavaScript • React'
```