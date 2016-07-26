var PRODUCTS= [
  {name: 'Angular', company: 'Google', category: 'Client', js: true,
  comments: [{name: 'Jed', text: "A great framework"}] },
  {name: 'React', company: 'Facebook', category: 'Client', js: true,
  comments: [{name: 'Jed', text: "A great framework"}] },
  {name: 'Meteor', company: 'Independent', category: 'Server', js: true,
  comments: [{name: 'Jed', text: "A great framework"}] },
  {name: 'Node', company: 'Independent', category: 'Server', js: true,
  comments: [{name: 'Jed', text: "A great framework"}] },
  {name: 'Golang', company: 'Google', category: 'Server', js: false,
  comments: [{name: 'Jed', text: "A great framework"}] },
  {name: 'Swift', company: 'Apple', category: 'Server', js: false,
  comments: [{name: 'Jed', text: "A great framework"}] },
  {name: 'Aurelia', company: 'Independent', category: 'Client', js: true,
  comments: [{name: 'Jed', text: "A great framework"}] },
  {name: 'Ember', company: 'Independent', category: 'Client', js: true,
  comments: [{name: 'Jed', text: "A great framework"}] },
  {name: 'Python', company: 'Independent', category: 'Server', js: false,
  comments: [{name: 'Jed', text: "A great framework"}] }
]
//instead of sort, inefficient, practice
PRODUCTS = PRODUCTS.map(product => product.category).reduce((a,b) =>
{ if(a.indexOf(b) < 0) a.push(b); return a },[]).map(category =>{
	return PRODUCTS.filter( product => {return product.category === category})
}).reduce((a,b) => { a.push.apply(a,b); return a }, [])

export default PRODUCTS
