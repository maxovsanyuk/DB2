(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,a,t){e.exports=t(49)},29:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},49:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),c=t(19),r=t.n(c),l=(t(28),t(1)),i=t(2),o=t(4),m=t(3),p=t(5),u=t(7),h=(t(29),t(11));t(30),t(31);var d=function(){return s.a.createElement("div",{className:"home"},s.a.createElement("span",{className:"creator"},"Created by Ovsianiuk Maksym"))},f=t(20),E=(t(32),function(e){function a(e){return Object(l.a)(this,a),Object(o.a)(this,Object(m.a)(a).call(this,e))}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement(f.a,{url:"https://maxovsanyuk.github.io/DB2-first-task/",loading:"lazy",className:"home",display:"initial"})}}]),a}(n.Component)),v=(t(33),function(e){function a(e){return Object(l.a)(this,a),Object(o.a)(this,Object(m.a)(a).call(this,e))}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.data.characters.map(function(e,a){return s.a.createElement("div",{className:"characters-items",key:a},e.name)}),a=this.props.data.planets.map(function(e,a){return s.a.createElement("div",{className:"planets-items",key:a},e.name)}),t=this.props.data.species.map(function(e,a){return s.a.createElement("div",{className:"species-items",key:a},e.name)}),n=this.props.data.starships.map(function(e,a){return s.a.createElement("div",{className:"starships-items",key:a},e.name)}),c=this.props.data.vehicles.map(function(e,a){return s.a.createElement("div",{className:"vehicles-items",key:a},e.name)});return s.a.createElement("div",{className:"modal",id:"modal"},s.a.createElement("span",{className:"overview"},"Overview:"),s.a.createElement("div",{className:"overview-content"},this.props.data.opening_crawl),s.a.createElement("div",{className:"characters-container"},s.a.createElement("span",{className:"characters"},"Characters:"),s.a.createElement("div",{className:"sort-name"},s.a.createElement("span",null,"Sort by Name: "),s.a.createElement("label",null,s.a.createElement("span",{className:"sort-title"},"Top"),s.a.createElement("input",{className:"name-input",type:"radio",name:"characters",onClick:this.props.data.sortUpCharacters})),s.a.createElement("label",null,s.a.createElement("span",{className:"sort-title"},"Dawn"),s.a.createElement("input",{className:"name-input",type:"radio",name:"characters",onClick:this.props.data.sortDawnCharacters}))),s.a.createElement("div",{className:"sort-name"},s.a.createElement("input",{type:"search",className:"search",placeholder:"Search...",onChange:this.props.data.searchCharacters})),s.a.createElement("div",{className:"container"},e)),s.a.createElement("div",{className:"planets-container"},s.a.createElement("span",{className:"characters"},"Planets:"),s.a.createElement("div",{className:"sort-name"},s.a.createElement("span",null,"Sort by Name: "),s.a.createElement("label",null,s.a.createElement("span",{className:"sort-title"},"Top"),s.a.createElement("input",{className:"name-input",type:"radio",name:"planets",onClick:this.props.data.sortUpPlanets})),s.a.createElement("label",null,s.a.createElement("span",{className:"sort-title"},"Dawn"),s.a.createElement("input",{className:"name-input",type:"radio",name:"planets",onClick:this.props.data.sortDawnPlanets}))),s.a.createElement("div",{className:"sort-name"},s.a.createElement("input",{type:"search",className:"search",placeholder:"Search...",onChange:this.props.data.searchPlanets})),s.a.createElement("div",{className:"container"},a)),s.a.createElement("div",{className:"species-container"},s.a.createElement("span",{className:"species-title"},"Species:"),s.a.createElement("div",{className:"sort-name"},s.a.createElement("span",null,"Sort by Name: "),s.a.createElement("label",null,s.a.createElement("span",{className:"sort-title"},"Top"),s.a.createElement("input",{className:"name-input",type:"radio",name:"species",onClick:this.props.data.sortUpSpecies})),s.a.createElement("label",null,s.a.createElement("span",{className:"sort-title"},"Dawn"),s.a.createElement("input",{className:"name-input",type:"radio",name:"species",onClick:this.props.data.sortDawnSpecies}))),s.a.createElement("div",{className:"sort-name"},s.a.createElement("input",{type:"search",className:"search",placeholder:"Search...",onChange:this.props.data.searchSpecies})),s.a.createElement("div",{className:"container"},t)),s.a.createElement("div",{className:"starships-container"},s.a.createElement("span",{className:"starships-title"},"Starships:"),s.a.createElement("div",{className:"sort-name"},s.a.createElement("span",null,"Sort by Name: "),s.a.createElement("label",null,s.a.createElement("span",{className:"sort-title"},"Top"),s.a.createElement("input",{className:"name-input",type:"radio",name:"starships",onClick:this.props.data.sortUpStarships})),s.a.createElement("label",null,s.a.createElement("span",{className:"sort-title"},"Dawn"),s.a.createElement("input",{className:"name-input",type:"radio",name:"starships",onClick:this.props.data.sortDawnStarships}))),s.a.createElement("div",{className:"sort-name"},s.a.createElement("input",{type:"search",className:"search",placeholder:"Search...",onChange:this.props.data.searchStarships})),s.a.createElement("div",{className:"container"},n)),s.a.createElement("div",{className:"starships-container"},s.a.createElement("span",{className:"vehicles-title"},"Vehicles:"),s.a.createElement("div",{className:"sort-name"},s.a.createElement("span",null,"Sort by Name: "),s.a.createElement("label",null,s.a.createElement("span",{className:"sort-title"},"Top"),s.a.createElement("input",{className:"name-input",type:"radio",name:"vehicles",onClick:this.props.data.sortUpVehicles})),s.a.createElement("label",null,s.a.createElement("span",{className:"sort-title"},"Dawn"),s.a.createElement("input",{className:"name-input",type:"radio",name:"vehicles",onClick:this.props.data.sortDawnVehicles}))),s.a.createElement("div",{className:"sort-name"},s.a.createElement("input",{type:"search",className:"search",placeholder:"Search...",onChange:this.props.data.searchVehicles})),s.a.createElement("div",{className:"container"},c)),s.a.createElement("button",{className:"close-btn",onClick:this.props.data.removeModal}))}}]),a}(n.Component)),N=(t(34),function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={characters:[],planets:[],species:[],starships:[],vehicles:[],opening_crawl:[],removeModal:function(){t.setState({characters:[],planets:[],species:[],starships:[],vehicles:[],opening_crawl:[]}),document.getElementById("modal").style.display="none"},sortUpCharacters:function(){t.setState({characters:t.state.characters.sort(function(e,a){return e.name<a.name?-1:1})})},sortDawnCharacters:function(){t.setState({characters:t.state.characters.sort(function(e,a){return e.name<a.name?1:-1})})},searchCharacters:function(e){t.setState({characters:t.state.characters.filter(function(a){return a.name.includes(e.target.value)})})},sortUpPlanets:function(){t.setState({planets:t.state.planets.sort(function(e,a){return e.name<a.name?-1:1})})},sortDawnPlanets:function(){t.setState({planets:t.state.planets.sort(function(e,a){return e.name<a.name?1:-1})})},searchPlanets:function(e){t.setState({planets:t.state.planets.filter(function(a){return a.name.includes(e.target.value)})})},sortUpSpecies:function(){t.setState({species:t.state.species.sort(function(e,a){return e.name<a.name?-1:1})})},sortDawnSpecies:function(){t.setState({species:t.state.species.sort(function(e,a){return e.name<a.name?1:-1})})},searchSpecies:function(e){t.setState({species:t.state.species.filter(function(a){return a.name.includes(e.target.value)})})},sortUpStarships:function(){t.setState({starships:t.state.starships.sort(function(e,a){return e.name<a.name?-1:1})})},sortDawnStarships:function(){t.setState({starships:t.state.starships.sort(function(e,a){return e.name<a.name?1:-1})})},searchStarships:function(e){t.setState({starships:t.state.starships.filter(function(a){return a.name.includes(e.target.value)})})},sortUpVehicles:function(){t.setState({vehicles:t.state.vehicles.sort(function(e,a){return e.name<a.name?-1:1})})},sortDawnVehicles:function(){t.setState({vehicles:t.state.vehicles.sort(function(e,a){return e.name<a.name?1:-1})})},searchVehicles:function(e){t.setState({vehicles:t.state.vehicles.filter(function(a){return a.name.includes(e.target.value)})})}},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"getMoreData",value:function(e){var a=this,t=e.target,n=t.getAttribute("data-characters").split(","),s=t.getAttribute("data-planets").split(","),c=t.getAttribute("data-species").split(","),r=t.getAttribute("data-starships").split(","),l=t.getAttribute("data-vehicles").split(","),i=t.getAttribute("data-opening_crawl");n.map(function(e){fetch(e).then(function(e){return e.json()}).then(function(e){a.setState({characters:a.state.characters.concat(e),opening_crawl:i})})}),s.map(function(e){fetch(e).then(function(e){return e.json()}).then(function(e){a.setState({planets:a.state.planets.concat(e)})})}),c.map(function(e){fetch(e).then(function(e){return e.json()}).then(function(e){a.setState({species:a.state.species.concat(e)})})}),r.map(function(e){fetch(e).then(function(e){return e.json()}).then(function(e){a.setState({starships:a.state.starships.concat(e)})})}),l.map(function(e){fetch("".concat(e)).then(function(e){return e.json()}).then(function(e){a.setState({vehicles:a.state.vehicles.concat(e)})})}),document.getElementById("modal").style.display="flex"}},{key:"render",value:function(){var e=this,a=this.props.data.map(function(a,t){return s.a.createElement("section",{key:t,className:"film-section"},s.a.createElement("div",{className:"title"},a.title),s.a.createElement("span",{className:"release-date"},"Release date: ",a.release_date),s.a.createElement("h4",null,"Producer :",a.producer),s.a.createElement("button",{className:"more-info","data-characters":a.characters,"data-planets":a.planets,"data-species":a.species,"data-starships":a.starships,"data-vehicles":a.vehicles,"data-opening_crawl":a.opening_crawl,onClick:e.getMoreData.bind(e)},"Get more information"))});return s.a.createElement("div",null,this.props.data.length?s.a.createElement("div",{className:"films"},a,s.a.createElement(v,{data:this.state})):s.a.createElement("div",{className:"second-preloader"}))}}]),a}(n.Component)),b=(t(35),function(e){function a(e){return Object(l.a)(this,a),Object(o.a)(this,Object(m.a)(a).call(this,e))}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.data.map(function(e,a){return s.a.createElement("section",{key:a,className:"people-section"},s.a.createElement("span",{className:"name"},"Name: ",e.name),s.a.createElement("span",null,"Gender: ",e.gender),s.a.createElement("span",null,"Mass: ",e.mass),s.a.createElement("span",null,"Hair color: ",e.hair_color),s.a.createElement("span",null,"Eye color: ",e.eye_color))});return s.a.createElement("div",null,this.props.data.length?s.a.createElement("div",{className:"people"},e):s.a.createElement("div",{className:"second-preloader"}))}}]),a}(n.Component)),k=(t(36),function(e){function a(e){return Object(l.a)(this,a),Object(o.a)(this,Object(m.a)(a).call(this,e))}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.data.map(function(e,a){return s.a.createElement("section",{key:a,className:"planet-section"},s.a.createElement("span",{className:"name"},"Name: ",e.name),s.a.createElement("span",null,"Climate: ",e.climate),s.a.createElement("span",null,"Diameter: ",e.diameter),s.a.createElement("span",null,"Gravity: ",e.gravity),s.a.createElement("span",null,"Terrain: ",e.terrain),s.a.createElement("span",null,"Surface water: ",e.surface_water),s.a.createElement("span",null,"Rotation period: ",e.rotation_period))});return s.a.createElement("div",null,this.props.data.length?s.a.createElement("div",{className:"planet"},e):s.a.createElement("div",{className:"second-preloader"}))}}]),a}(n.Component)),g=(t(37),function(e){function a(e){var t;return Object(l.a)(this,a),t=Object(o.a)(this,Object(m.a)(a).call(this,e)),console.log(e),t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.data.map(function(e,a){return s.a.createElement("section",{key:a,className:"species-section"},s.a.createElement("span",{className:"name"},"Name: ",e.name),s.a.createElement("span",null,"Language: ",e.language),s.a.createElement("span",null,"Average height: ",e.average_height),s.a.createElement("span",null,"Average lifespan: ",e.average_lifespan),s.a.createElement("span",null,"Classification: ",e.classification),s.a.createElement("span",null,"Skin colors: ",e.skin_colors),s.a.createElement("span",null,"Designation: ",e.designation))});return s.a.createElement("div",null,this.props.data.length?s.a.createElement("div",{className:"species"},e):s.a.createElement("div",{className:"second-preloader"}))}}]),a}(n.Component)),y=(t(38),function(e){function a(e){return Object(l.a)(this,a),Object(o.a)(this,Object(m.a)(a).call(this,e))}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.data.map(function(e,a){return s.a.createElement("section",{key:a,className:"starships-section"},s.a.createElement("span",{className:"name"},"Name: ",e.name),s.a.createElement("span",null,"Model: ",e.model),s.a.createElement("span",null,"Starship class: ",e.starship_class),s.a.createElement("span",null,"Passengers: ",e.passengers),s.a.createElement("span",null,"Consumables: ",e.consumables),s.a.createElement("span",null,"Cargo capacity: ",e.cargo_capacity),s.a.createElement("span",null,"Length: ",e.length))});return s.a.createElement("div",null,this.props.data.length?s.a.createElement("div",{className:"starships"},e):s.a.createElement("div",{className:"second-preloader"}))}}]),a}(n.Component)),j=(t(39),function(e){function a(e){return Object(l.a)(this,a),Object(o.a)(this,Object(m.a)(a).call(this,e))}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.data.map(function(e,a){return s.a.createElement("section",{key:a,className:"vehicles-section"},s.a.createElement("span",{className:"name"},"Name: ",e.name),s.a.createElement("span",null,"Model: ",e.model),s.a.createElement("span",null,"Vehicle class: ",e.vehicle_class),s.a.createElement("span",null,"Passengers: ",e.passengers),s.a.createElement("span",null,"Consumables: ",e.consumables),s.a.createElement("span",null,"Cargo capacity: ",e.cargo_capacity),s.a.createElement("span",null,"Cost in credits: ",e.cost_in_credits))});return s.a.createElement("div",null,this.props.data.length?s.a.createElement("div",{className:"vehicles"},e):s.a.createElement("div",{className:"second-preloader"}))}}]),a}(n.Component)),w=(t(40),function(e){function a(e){return Object(l.a)(this,a),Object(o.a)(this,Object(m.a)(a).call(this,e))}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"all-items"},s.a.createElement("div",{className:"all-items__header"},s.a.createElement(u.b,{to:"/DB2/second-task/films",className:"remove-underline"},s.a.createElement("div",{className:"second-task__link"},"Films")),s.a.createElement(u.b,{to:"/DB2/second-task/people",className:"remove-underline"},s.a.createElement("div",{className:"second-task__link"},"People")),s.a.createElement(u.b,{to:"/DB2/second-task/planets",className:"remove-underline"},s.a.createElement("div",{className:"second-task__link"},"Planets")),s.a.createElement(u.b,{to:"/DB2/second-task/species",className:"remove-underline"},s.a.createElement("div",{className:"second-task__link"},"Species")),s.a.createElement(u.b,{to:"/DB2/second-task/starships",className:"remove-underline"},s.a.createElement("div",{className:"second-task__link"},"Starships")),s.a.createElement(u.b,{to:"/DB2/second-task/vehicles",className:"remove-underline"},s.a.createElement("div",{className:"second-task__link"},"Vehicles"))),s.a.createElement(h.a,{path:"/DB2/second-task/films",render:function(){return s.a.createElement(N,{data:e.props.data.films})}}),s.a.createElement(h.a,{path:"/DB2/second-task/people",render:function(){return s.a.createElement(b,{data:e.props.data.people})}}),s.a.createElement(h.a,{path:"/DB2/second-task/planets",render:function(){return s.a.createElement(k,{data:e.props.data.planets})}}),s.a.createElement(h.a,{path:"/DB2/second-task/species",render:function(){return s.a.createElement(g,{data:e.props.data.species})}}),s.a.createElement(h.a,{path:"/DB2/second-task/starships",render:function(){return s.a.createElement(y,{data:e.props.data.starships})}}),s.a.createElement(h.a,{path:"/DB2/second-task/vehicles",render:function(){return s.a.createElement(j,{data:e.props.data.vehicles})}}))}}]),a}(n.Component)),S=function(e){function a(e){return Object(l.a)(this,a),Object(o.a)(this,Object(m.a)(a).call(this,e))}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement(u.a,null,s.a.createElement("section",{className:"header"},s.a.createElement(u.b,{to:"/DB2/home",className:"remove-underline"},s.a.createElement("div",{className:"header-link"},"Home")),s.a.createElement(u.b,{to:"/DB2/first-task",className:"remove-underline"},s.a.createElement("div",{className:"header-link first-task"},"First Task")),s.a.createElement(u.b,{to:"/DB2/second-task",className:"remove-underline"},s.a.createElement("div",{className:"header-link",data:this.props.data},"Second Task")),s.a.createElement(h.a,{exact:!0,path:"/DB2/home",component:d}),s.a.createElement(h.a,{path:"/DB2/first-task",component:E}),s.a.createElement(h.a,{path:"/DB2/second-task",render:function(){return s.a.createElement(w,{data:e.props.data})}})))}}]),a}(n.Component),O=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={films:[],people:[],planets:[],species:[],starships:[],vehicles:[],isLoaded:!1},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,a="https://cors-anywhere.herokuapp.com/",t=fetch(a+"http://swapi.co/api/films").then(function(e){return e.json()}).then(function(a){e.setState({films:a.results})}),n=fetch(a+"http://swapi.co/api/people").then(function(e){return e.json()}).then(function(a){e.setState({people:a.results})}),s=fetch(a+"http://swapi.co/api/planets").then(function(e){return e.json()}).then(function(a){e.setState({planets:a.results})}),c=fetch(a+"http://swapi.co/api/species").then(function(e){return e.json()}).then(function(a){e.setState({species:a.results})}),r=fetch(a+"http://swapi.co/api/starships").then(function(e){return e.json()}).then(function(a){e.setState({starships:a.results})}),l=fetch(a+"http://swapi.co/api/vehicles").then(function(e){return e.json()}).then(function(a){e.setState({vehicles:a.results})});Promise.all([t,n,s,c,r,l]).then(function(){e.setState({isLoaded:!0})})}},{key:"render",value:function(){return s.a.createElement(u.a,null,this.state.isLoaded?s.a.createElement("section",{className:"init-section"},s.a.createElement(S,{data:this.state})):s.a.createElement("div",{className:"preloader"}))}}]),a}(n.Component),C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e,a){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(s.a.createElement(u.a,null,s.a.createElement(O,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/DB2",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var a="".concat("/DB2","/service-worker.js");C?(function(e,a){fetch(e).then(function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):D(e,a)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(a,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):D(a,e)})}}()}},[[23,1,2]]]);
//# sourceMappingURL=main.9eb5880e.chunk.js.map