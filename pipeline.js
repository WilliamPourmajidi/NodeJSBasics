

const { from } = rxjs;
const { map, reduce } = rxjs.operators;

const plans = from([
  [{id: 1, is_active: true}, {id: 2, is_active: false}, {id: 3, is_active: true}, {id: 4, is_active: true}],
  [{id: 5, is_active: true}, {id: 6, is_active: true}],
  [{id: 7, is_active: false}, {id: 8, is_active: true}, {id: 9, is_active: true}],
  [{id: 10, is_active: true}, {id: 11, is_active: false}, {id: 12, is_active: true}, {id: 13, is_active: false}],
]);

function PlanCard(plan) {
  this.id = plan.id;
}

plans.pipe(
  map(plans => plans.reduce((results, plan) => plan.is_active ? [...results, new PlanCard(plan, 1, 1)] : results, [])),
  reduce((results, plans) => [...results, ...plans], [])
).subscribe(results => { console.log(results); });
