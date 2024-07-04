// 1.
const list = document.querySelector('.list');
const p1 = document.createElement('p');
p1.innerText = 'Visit Japan';
list.appendChild(p1);

// 2.
const p2 = document.createElement('p');
p2.innerText = 'Vanlife for 1 year.';
list.insertAdjacentElement('beforeend', p2);

// 3.
console.log(list.innerHTML);

// 4,5.
// const p4 =
//   '<p>Take the Hurtigruten for one week and see whales.</p>';
// list.innerHTML = p4;
// console.log(list);

// 6.
const p6 = '<p>Ride motocross with my daughter and scrub jumps.</p>';
list.insertAdjacentHTML('afterbegin', p6);

// 7
const pS = [
  '<p>Own a Nissan GT-R 34 Nismo.</p>',
  '<p>Paddle a canoe between islands and camp.</p>',
  '<p>Work at a place where I enjoy being part of the team, and where we train together regularly.</p>',
];
pS.forEach((p) => {
  list.insertAdjacentHTML('afterbegin', p);
});

// 8.
console.log('Bucket list length: ', list.children.length);

// 9.
const h2 = (document.querySelector('.owner').textContent = "Jimmy's");

// 10.
const p7 = document.createElement('p');
p7.innerText =
  'Be at a Muay Thai training camp in Thailand for six months and participate in a fight.';
const firstBucketItem = document.querySelector('.list p');
firstBucketItem.parentNode.replaceChild(p7, firstBucketItem);

// 11.
const p8 = document.createElement('p');
p8.innerText = 'Make 10 muscle-up without break.';
const thirdPInList = list.querySelector('p:nth-child(3)');
thirdPInList.parentNode.replaceChild(p8, thirdPInList);

// 12.
list.removeChild(list.lastChild);
