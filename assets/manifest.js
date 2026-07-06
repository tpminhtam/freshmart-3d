/* Real 3D product models.
   Two kinds of entries in `products`:
     - matchers (have `re`): replace the FIRST catalog item whose section+shape+name match
     - extras (have `add:true` + display name `n`): appended to the section's stock directly
   rot  = [x,y,z] radians applied to stand up models scanned lying flat / z-up
          (GSO & YCB scans: -90° about X stands them up with the front on +z)
   yaw  = extra turn about the vertical AFTER standing (0.5*PI shows the wide face)
   flip = 180° yaw for models whose front lands on the wrong side
   h    = target world height override (defaults per shape in TARGET_H)
   Licenses: YCB CC BY 4.0 · Google Scanned Objects CC BY 4.0 · Poly Haven CC0 — see credits.html */
window.ASSET_MANIFEST={
  produce:{
    apple:  {file:'assets/models/food_apple_01/food_apple_01_1k.gltf'},
    banana: {file:'assets/models/bananas/bananas_1k.gltf', node:'bananas_bunch'}
  },
  products:[
    /* ---- matchers (replace one catalog item each) ---- */
    {id:'cereal',  file:'assets/models/gso_cereal_box.glb',       section:'PANTRY',    s:'box',    re:'muesli|cruesli|chocapic|flocons|weetabix|corn flakes|crisp|avoine|avena|croustillant|country|special', rot:[-1.5708,0,0], credit:'GSO'},
    {id:'soup',    file:'assets/models/ycb_tomato_soup_can.glb',  section:'PANTRY',    s:'can',    re:'soupe|soup|velout|gazpacho|caldo|moulin|buldak', rot:[-1.5708,0,0], credit:'YCB'},
    {id:'beans',   file:'assets/models/long_life_food/long_life_food_1k.gltf', node:'long_life_food_beans',    section:'PANTRY', s:'can', re:'haricot|lentille|flageolet|ratatouille|courgette|tajine|curry|cornichon', credit:'PH'},
    {id:'tomato',  file:'assets/models/long_life_food/long_life_food_1k.gltf', node:'long_life_food_tomatoes', section:'PANTRY', s:'can', re:'tomat|polpa|concass|ketchup', credit:'PH'},
    {id:'crackers',file:'assets/models/ycb_cracker_box.glb',      section:'SNACKS',    s:'box',    re:'cracker|kn.ckebrot|flatb|vinta|marinheir|krit|integrali|multi.seed', rot:[-1.5708,0,0], yaw:1.5708, credit:'YCB'},
    {id:'cookies', file:'assets/models/gso_cupcakes.glb',         section:'SNACKS',    s:'box',    re:'biscuit|cookie|prince|henry|sabl|goter|nature|tonik|pomme|figue|ssame', rot:[-1.5708,0,0], credit:'GSO'},
    {id:'candy',   file:'assets/models/gso_raisinets.glb',        section:'SNACKS',    s:'bag',    re:'haribo|tic tac|dragibus|chamallow|ricola|halls|vichy|menthol|scoubi', rot:[-1.5708,0,0], credit:'GSO'},
    {id:'coffee',  file:'assets/models/ycb_master_chef_can.glb',  section:'BEVERAGES', s:'can',    re:'caf|nescaf|crema|filtre|asta|chicor', rot:[-1.5708,0,0], credit:'YCB'},
    {id:'tea',     file:'assets/models/gso_green_tea.glb',        section:'BEVERAGES', s:'box',    re:'th|tea|earl|yellow label|ambar', credit:'GSO'},
    {id:'milk',    file:'assets/models/long_life_food/long_life_food_1k.gltf', node:'long_life_food_milk', section:'DAIRY', s:'carton', re:'lait|milk|uht|salim|lben|kfir|croissance', credit:'PH'},

    /* ---- extras: PANTRY ---- */
    {id:'sugar',    add:true, n:'Sugar Box',        emoji:'🍚', file:'assets/models/ycb_sugar_box.glb',     section:'PANTRY', s:'box',   rot:[-1.5708,0,0], yaw:1.5708, credit:'YCB'},
    {id:'mustard',  add:true, n:'Mustard',          emoji:'🌭', file:'assets/models/ycb_mustard.glb',       section:'PANTRY', s:'bottle', rot:[-1.5708,0,0], credit:'YCB'},
    {id:'potted',   add:true, n:'Potted Meat',      emoji:'🥫', file:'assets/models/ycb_potted_meat.glb',   section:'PANTRY', s:'can',   rot:[-1.5708,0,0], h:0.3, credit:'YCB'},
    {id:'pudding',  add:true, n:'Chocolate Pudding',emoji:'🍮', file:'assets/models/ycb_pudding_box.glb',   section:'PANTRY', s:'box',   h:0.45, credit:'YCB'},
    {id:'gelatin',  add:true, n:'Strawberry Gelatin',emoji:'🍓',file:'assets/models/ycb_gelatin_box.glb',   section:'PANTRY', s:'box',   h:0.38, credit:'YCB'},
    {id:'herring',  add:true, n:'Smoked Herring Tin',emoji:'🐟',file:'assets/models/gso_herring_tin.glb',   section:'PANTRY', s:'block', h:0.1, credit:'GSO'},
    {id:'salt',     add:true, n:'Sea Salt',         emoji:'🧂', file:'assets/models/russian_food_cans_01/russian_food_cans_01_1k.gltf', node:'russian_food_cans_01_salt_box', section:'PANTRY', s:'box', h:0.42, credit:'PH'},
    {id:'condmilk', add:true, n:'Condensed Milk',   emoji:'🥛', file:'assets/models/russian_food_cans_01/russian_food_cans_01_1k.gltf', node:'russian_food_cans_01_can_cond', section:'PANTRY', s:'can', h:0.34, credit:'PH'},
    {id:'fishcan',  add:true, n:'Canned Fish',      emoji:'🐟', file:'assets/models/russian_food_cans_01/russian_food_cans_01_1k.gltf', node:'russian_food_cans_01_can_fish', section:'PANTRY', s:'block', h:0.14, credit:'PH'},

    /* ---- extras: SNACKS ---- */
    {id:'butterfinger', add:true, n:'Butterfinger Box',   emoji:'🍫', file:'assets/models/gso_butterfinger.glb', section:'SNACKS', s:'bar', h:0.28, credit:'GSO'},
    {id:'crunchgs',     add:true, n:'Crunch Cookie Bars', emoji:'🍪', file:'assets/models/gso_crunch_gs.glb',    section:'SNACKS', s:'box', rot:[-1.5708,0,0], h:0.5, credit:'GSO'},
    {id:'nips',         add:true, n:'Butter Rum Candy',   emoji:'🍬', file:'assets/models/gso_nips.glb',         section:'SNACKS', s:'box', rot:[-1.5708,0,0], h:0.42, credit:'GSO'},
    {id:'donuts',       add:true, n:'Donut Sticks',       emoji:'🍩', file:'assets/models/gso_donut_sticks.glb', section:'SNACKS', s:'box', rot:[-1.5708,0,0], h:0.42, credit:'GSO'},
    {id:'cloudcakes',   add:true, n:'Cloud Cakes',        emoji:'🧁', file:'assets/models/gso_cloud_cakes.glb',  section:'SNACKS', s:'box', rot:[-1.5708,0,0], h:0.45, credit:'GSO'},

    /* ---- extras: BEVERAGES ---- */
    {id:'pepsi12',   add:true, n:'Pepsi Max 12-pack',  emoji:'🥤', file:'assets/models/gso_pepsi_12pk.glb',       section:'BEVERAGES', s:'box', credit:'GSO'},
    {id:'brisk12',   add:true, n:'Brisk Iced Tea 12-pack', emoji:'🧃', file:'assets/models/gso_brisk_12pk.glb',   section:'BEVERAGES', s:'box', credit:'GSO'},
    {id:'nesquik',   add:true, n:'Nesquik Powder',     emoji:'🍫', file:'assets/models/gso_nesquik.glb',          section:'BEVERAGES', s:'can', rot:[-1.5708,0,0], credit:'GSO'},
    {id:'tasters',   add:true, n:"Taster's Choice Coffee", emoji:'☕', file:'assets/models/gso_tasters_choice.glb',section:'BEVERAGES', s:'jar', rot:[-1.5708,0,0], h:0.5, credit:'GSO'},
    {id:'momento',   add:true, n:'Nescafé Momento',    emoji:'☕', file:'assets/models/gso_nescafe_momento.glb',  section:'BEVERAGES', s:'box', rot:[-1.5708,0,0], h:0.5, credit:'GSO'},
    {id:'swissmiss', add:true, n:'Swiss Miss Cocoa',   emoji:'🍫', file:'assets/models/gso_swiss_miss.glb',       section:'BEVERAGES', s:'box', h:0.42, credit:'GSO'}
  ]
};
