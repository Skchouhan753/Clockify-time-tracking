let url='https://polar-ocean-25567.herokuapp.com/api/todo';

let stop_time;
let getData= async()=>{
    let response = await fetch(`${url}`);
    let data = await response.json();
    append(data);
}

getData();



let append = (data) => {
    let container = document.getElementById('container');
    container.innerHTML = null;
    data.forEach(({id,title,stop_time,status}) => {
        let div = document.createElement('div');
        let h3 = document.createElement('h3');
		h3.innerText = title;
		
		let p1 = document.createElement('p');
		p1.innerText = stop_time;
		//console.log(stop_time);

        let p = document.createElement('p');
        p.innerText = status;

        let delete_btn = document.createElement('button');
        delete_btn.innerText = 'Delete';
        delete_btn.onclick = () => {
            remove(id);
        }

        //toggle

        let toggle_btn = document.createElement('button');
        toggle_btn.innerText = 'Toggle';
        toggle_btn.onclick = () => {
            toggle(id);
        }

        div.append(h3, p,p1, delete_btn, toggle_btn);
        container.append(div);
    });
}


let addTodo = async (stop_time) => {
    let todo = document.getElementById('todo').value;

    let todo_data = {
		title: todo,
		stop_time,
        status: false,
        
    };

    let res = await fetch(`${url}`, {
        method: 'POST',
        body: JSON.stringify(todo_data),
        headers: {
            'Content-Type': 'application/json',
        }
    });
    getData();
};

let remove = async (id) => {
    let res = await fetch(`${url}/${id}`, {
        method:'DELETE',
    });
    getData();
}

let toggle = async (id) => {

    let todo = await fetch(`${url}/${id}`);
    todo = await todo.json();

    let todo_status = { status: !todo.status };
    let res = await fetch(`${url}/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(todo_status),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    getData();
};


// stopwatch

// Global variables
const time_el = document.querySelector('.watch .time');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById("stop");

let seconds = 0;
let interval = null;

// Event listeners
start_btn.addEventListener('click', start);
stop_btn.addEventListener("click", stop);

// Update the timer
function timer () {
	seconds++;

	// Format our time
	let hrs = Math.floor(seconds / 3600);
	let mins = Math.floor((seconds - (hrs * 3600)) / 60);
	let secs = seconds % 60;

	if (secs < 10) secs = '0' + secs;
	if (mins < 10) mins = "0" + mins;
	if (hrs < 10) hrs = "0" + hrs;

	time_el.innerText = `${hrs}:${mins}:${secs}`;
}


function start () {
	if (interval) {
		return
	}

	interval = setInterval(timer, 1000);
}

function stop () {
	clearInterval(interval);
	interval = null;
	stop_time = time_el.innerText;
	addTodo(stop_time);
	//console.log(stop_time);
}
