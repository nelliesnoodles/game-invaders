// JavaScript source code
/*  For Chingu solo project Tier 2
 *
 *
 */
//----------- game objects ---------//

let my_canvas;
let ctx;
let ship_image;
let enemy_image;
let tile_height;
let tile_width;
let enemy_tile_w;
let enemy_tile_h;
let max_right;
let max_left;
let max_up;
let max_down;
const enemy_speed = 1;
var current_player_x;
var current_player_y;
/* Enemy arrays for movement/image placement */
var first_wave = {};
var second_wave = {};
var third_wave = {};
/* direction variable helps determine the horizontal direction the enemies move*/
var direction_first = 1
var direction_second = -1
var direction_third = 1


//-------- Set up functions ----------

function set_DOM() {
    my_canvas = document.getElementById("myCanvas");

    tile_height = 20;
    tile_width = 30;
    enemy_tile_h = 15;
    enemy_tile_w = 15;
    ctx = my_canvas.getContext("2d");
    max_right = my_canvas.width - tile_width; // width - width of player tile
    max_left = 0;
    max_up = 100;
    max_down = my_canvas.height - tile_height;
    current_player_x = max_right / 2
    current_player_y = 110
    for (i = 0; i < 5; i++) {
        var new_enemy = 'new_enemy' + i
        first_wave[new_enemy] = []
        second_wave[new_enemy] = []
        third_wave[new_enemy] = []

    }
    //stackoverflow link: https://stackoverflow.com/questions/21139826/requestanimationframe-method-is-not-working
    window.requestAnimationFrame =
           window.requestAnimationFrame ||
           window.mozRequestAnimationFrame ||
           window.webkitRequestAnimationFrame ||
           window.msRequestAnimationFrame;


}



//--------------------------------------//
//---------animate functions------------//

/*  --- Enemy tiles ---  */
function set_enemy_arrays() {
    // set the initial coordinates in arrays
    // coordinates will be altered to create shifting motion
    var spacing = (enemy_tile_w * 2)

    // y, or the height/vertical is not altered in this code
    var y1 = 5
    var y2 = y1 + enemy_tile_h + 5
    var y3 = y2 + enemy_tile_h + 5

    // x, horizontal/width will be altered by this code
    let center = my_canvas.width / 2
    let first_offset = center - spacing * 2
    var x1 = first_offset
    var x2 = first_offset - spacing
    var x3 = first_offset + spacing


    for (var item in first_wave) {
        // set coordinates in array
        var array_item = first_wave[item]
        array_item[0] = x1
        array_item[1] = y1
        x1 += spacing
    };
    for (var item in second_wave) {
        var array_item2 = second_wave[item]
        array_item2[0] = x2
        array_item2[1] = y2
        x2 += spacing
    };
    for (var item in third_wave) {
        var array_item3 = third_wave[item]
        array_item3[0] = x3
        array_item3[1] = y3
        x3 += spacing
    };


}

function draw_enemy1() {

    enemy = new Image()
    enemy.src = 'images/virus1.png'

    let w = enemy_tile_w;
    let h = enemy_tile_h;



    //clear_screen_first_wave()
    enemy.onload = () => {
        for (var item in first_wave) {

            var coordinates = first_wave[item]
            var x = coordinates[0]
            var y = coordinates[1]
            ctx.drawImage(enemy, x, y, w, h)
            //window.requestAnimationFrame(draw_enemy1)


        };
    }
}

function draw_enemy2() {

    enemy2 = new Image()
    enemy2.src = 'images/virus2.png'

    let w = enemy_tile_w;
    let h = enemy_tile_h;



    //clear_screen_second_wave()
    enemy2.onload = () => {
        for (var item in second_wave) {
            var coordinates = second_wave[item]

            var x = coordinates[0]
            var y = coordinates[1]

            ctx.drawImage(enemy2, x, y, w, h)
            //window.requestAnimationFrame(draw_enemy2)
            //x += 45


        };
    }
}

function draw_enemy3() {

    enemy3 = new Image()
    enemy3.src = 'images/virus3.png'

    let w = enemy_tile_w;
    let h = enemy_tile_h;



    //clear_screen_third_wave()
    enemy3.onload = () => {
        for (var item in third_wave) {
            var coordinates = third_wave[item]
            var x = coordinates[0]
            var y = coordinates[1]

            ctx.drawImage(enemy3, x, y, w, h)
            //window.requestAnimationFrame(draw_enemy3)
            //x += 45

        };
    }
}
/*  -----Player tile ----*/

function draw_ship() {
    //clear_screen_ship()
    my_canvas = document.getElementById("myCanvas")
    ctx = my_canvas.getContext("2d")
    ship_image = new Image()
    ship_image.src = 'images/wbc2.png'
    let x = current_player_x
    let y = current_player_y
    let w = tile_width;
    let h = tile_height;
    ship_image.onload = () => {
        ctx.drawImage(ship_image, x, y, w, h);
        //window.requestAnimationFrame(draw_ship)
    }

}


/* ------------ Clear screen for wbc -----------*/
function clear_screen_ship() {
    var y = max_up - tile_height / 2

    //ctx.clearRect(0, max_up, my_canvas.width, my_canvas.height);
}

/*   ---------  Clear screen for enemy ----- */
function clear_screen_first_wave() {

    var y = first_wave['new_enemy0'][1] + enemy_tile_h

    //ctx.clearRect(0, 0, my_canvas.width, y);
}

function clear_screen_second_wave() {
    var y1 = first_wave['new_enemy0'][1] + enemy_tile_h
    var y2 = second_wave['new_enemy0'][1]
    //ctx.clearRect(0, y1, my_canvas.width, y2)

}

function clear_screen_third_wave() {
    var y1 = second_wave['new_enemy0'][1] + enemy_tile_h
    var y2 = third_wave['new_enemy0'][1] - enemy_tile_h
    //ctx.clearRect(0, y1, my_canvas.width, y2)
}

/*  --- player movement ---- */

function move_up() {

    if (current_player_y > max_up) {
        current_player_y -= 5;

    }
    //update_game()
}

function move_down() {
    if (current_player_y < max_down) {
        current_player_y += 5
    }
  //  update_game()
}

function move_right() {

    if (current_player_x < max_right) {
        current_player_x += 5
    }
  //  update_game()
}

function move_left() {
    if (current_player_x > max_left) {
        current_player_x -= 5;
    }
  //  update_game()
}


function draw_laser() {
    /*  ---- NOTES ------
     * limit number of shots allowed on screen
     * remove laser item once it hits the borders of the game screen
     * check if laser collides with enemy/border on draw/movement
     * coordinates of enemy are kept in the dictionarys:
     * first_wave, second_wave, third_wave
     * the dictionary is what the draw_enemy uses to draw the images
     * Player image location is stored in:
     * current_player_x, current_player_y
     */

}

class Collision {
    /*
     * item_x, item_y
     * item2_x, item2_y
     * Check if the coordinates are within range of each other, or collide     *
     */
    constructor(item_x, item_y, item2_x, item2_y) {
        this.item_x = item_x
        this.item_y = item_y
        this.item2_x = item2_x
        this.item2_y = item2_y
    }

    set_range(range_x, range_y) {
        this.range_x = range_x
        this.range_y = range_y
    }

    check_collide() {
        /*
         * If the x, y of the class items are within range of each other,
         * return a True for collision detected, False if they are not within range
         */
        var check_x = Math.abs(this.item_x - this.item2_x)
        var check_y = Math.abs(this.item_y - this.item2_y)
        if (check_x <= range_x) {
            return true
        }
        if (check_y <= range_y) {
            return true
        }
        return false
    }
}

/*  ----- Enemy Movement ----*/
function alter_first_wave() {

    /*
    * The enemy will only move slightly left and right, horizontally across the
    * game board.
    */
    var spacing = (enemy_tile_w * 2)
    //let speed = 15
    //copied from the set_enemy_arrays() function:
    let center = my_canvas.width / 2
    let first_offset = center - spacing * 2
    //var x1 = first_offset
    //var x2 = first_offset - spacing
    //var x3 = first_offset + spacing
    /*----figure out when the entire row will meet the boundary--*/
    var initial_row_end = first_offset + spacing * 4
    //console.log(`Initial row end for red daleks = ${initial_row_end}`)
    var max_movement = my_canvas.width - enemy_tile_w

    /*---get current 5th item's x position ---*/
    //var new_enemy = 'new_enemy' + i
    var current_last_x = first_wave['new_enemy4'][0]
    var current_first_x = first_wave['new_enemy0'][0]
    /*  Check the math */
    //console.log(`Last known dalek position on x axis = ${current_last_x}`)
    //console.log(`Maximum calculated movement available = ${max_movement}`)
    //console.log(`Row width of canvas = ${my_canvas.width}`)


    if (current_last_x >= max_movement - 5) {
        direction_first = -1
    }
    else if (current_first_x <= 10) {
        direction_first = 1
    }

    for (item in first_wave) {
        x_coordinate = first_wave[item]
        x_coordinate[0] += direction_first * enemy_speed
    };

    //draw_enemy1()


}

function alter_second_wave() {

    var spacing = (enemy_tile_w * 2)
    //let speed = 15

    let center = my_canvas.width / 2
    let first_offset = center - spacing * 2

    var x2 = first_offset - spacing
    //console.log("SECOND WAVE ON THE MOVE!")
    /*----figure out when the entire row will meet the boundary--*/
    var initial_row_end = x2 + spacing * 4
    //console.log(`Initial row end for red daleks = ${initial_row_end}`)
    var max_movement = my_canvas.width - enemy_tile_w
    /*---get current 5th item's x position ---*/
    //var new_enemy = 'new_enemy' + i
    var current_last_x = second_wave['new_enemy4'][0]
    var current_first_x = second_wave['new_enemy0'][0]
    /*  Check the math */
    //console.log(`Last known virus position on x axis = ${current_last_x}`)
    //console.log(`Maximum calculated movement available = ${max_movement}`)
    //console.log(`Row width of canvas = ${my_canvas.width}`)


    if (current_last_x >= max_movement - 5) {
        direction_second = -1
    }
    else if (current_first_x <= 10) {
        direction_second = 1
    }

    for (item in second_wave) {
        x_coordinate = second_wave[item]
        x_coordinate[0] += direction_second * enemy_speed
    };

    //draw_enemy2()

}


function alter_third_wave() {
    /* A virus will seek out cells to invade, and it's the white blood cells job
     * To recognize a virus, envolop it and destroy it.
     * But these ones will shoot lasers.
   */
    var spacing = (enemy_tile_w * 2)
    //let speed = 15

    let center = my_canvas.width / 2
    let first_offset = center - spacing * 2
    var x3 = first_offset + spacing


    /*----figure out when the entire row will meet the boundary--*/
    var initial_row_end = x3 + spacing * 4
    //console.log(`Initial row end for red daleks = ${initial_row_end}`)
    var max_movement = my_canvas.width - enemy_tile_w
    /*---get current 5th item's x position ---*/
    //var new_enemy = 'new_enemy' + i
    var current_last_x = third_wave['new_enemy4'][0]
    var current_first_x = third_wave['new_enemy0'][0]
    /*  Check the math */
    //console.log(`Last known enemy position on x axis = ${current_last_x}`)
    //console.log(`Maximum calculated movement available = ${max_movement}`)
    //console.log(`Row width of canvas = ${my_canvas.width}`)


    if (current_last_x >= max_movement - 5) {
        direction_third = -1
    }
    else if (current_first_x <= 10) {
        direction_third = 1
    }

    for (item in third_wave) {
        x_coordinate = third_wave[item]
        x_coordinate[0] += direction_third * enemy_speed
    };

    //draw_enemy3()

}

function clear_loop(){
  ctx.fillStyle = 'black';
  ctx.clearRect(0, 0, my_canvas.width, my_canvas.height);
  ctx.fillRect(0, 0, my_canvas.width, my_canvas.height);
}

function move_virus() {
    //setInterval(alter_first_wave, 1000)
    //setInterval(alter_second_wave, 1100)
    //setInterval(alter_third_wave, 800)
    alter_first_wave()
    alter_second_wave()
    alter_third_wave()
}

function update_enemy() {

    draw_enemy1()
    draw_enemy2()
    draw_enemy3()

}

function update_game() {
    clear_loop()
    draw_ship()
    move_virus()
    update_enemy()


}

//--- RUN GAME ----------//
function run_game() {
    set_DOM()
    set_enemy_arrays()
    setInterval(update_game, 200)



    //test_enemy_arrays()

}
//-------------------------------------//
//--------onload functions-------------//
function checksize() {
    var size = window.innerWidth;
    //console.log(window.innerWidth)
    if (size < 800) {
        tile_height = 30;
        tile_width = 25;
        enemy_tile_h = 20;
        enemy_tile_w = 15;
    }
    else {
        tile_height = 35;
        tile_width = 20;
        enemy_tile_h = 25;
        enemy_tile_w = 20;
    }
    //console.log(`tile width = ${tile_width}`)
    //console.log(`tile height = ${tile_height}`)
}

function checkKey(e) {

    e = e || window.event;
    //console.log("keydown event")

    if (e.code === 'ArrowUp') {
        move_up()
    }
    else if (e.code === 'ArrowDown') {
        move_down()
    }
    else if (e.code === 'ArrowRight') {
        move_right()
    }
    else if (e.code === 'ArrowLeft') {
        move_left()
    }
    else {
        //console.log(`${e.code}`)
    }

}
//-------- TESTS ------------//
function test_keydown() {
    console.log("KEY DOWN")

}

function test_load() {
    console.log("Page is loaded.")
    set_DOM()
    draw_ship()
    draw_enemy()
}

function test_enemy_arrays() {
    for (item in first_wave) {
        var array_item1 = first_wave[item]
        console.log('first wave')
        console.log(array_item1[0], array_item1[1])
    };
    for (item in second_wave) {
        var array_item2 = second_wave[item]
        console.log('second wave')
        console.log(array_item2[0], array_item2[1])
    };
    for (item in third_wave) {
        var array_item3 = third_wave[item]
        console.log('third wave')
        console.log(array_item3[0], array_item3[1])
    };
}

function test_collison() {
    let test1 = new Collision(2, 3, 8, 10)
    test1.set_range(6)
    console.log(test1.test_)

}
/* accessability */
function change_scale(){
  let element = document.getElementById('body')
  let mode = element.value
  let toggle = document.getElementById('toggle')
  console.log(mode)
  if(mode == 'ON'){
    //MDN : div.classList.add("anotherclass");
    element.classList.add('grey_scale')
    element.value = 'OFF'
    toggle.className = ''
    toggle.classList.add("fas", "fa-toggle-off", "fa-2x")

  }
  else{
    element.classList.remove('grey_scale')
    element.value = 'ON'
    toggle.className = ''
    //<i class="fas fa-toggle-on"></i>
    toggle.classList.add("fas", "fa-toggle-on", "fa-2x")

  }
}

//---------- EVENT listeners, PAGE load -----------//
function set_EventListeners() {
    //start button
    //pause button
    //stop button
    let adaptor = document.getElementById('color_adapt')

    document.addEventListener('keydown', checkKey);
    window.addEventListener('resize', checksize);
    adaptor.addEventListener('click', change_scale);




}




window.addEventListener('load', (event) => {
    //set_DOM() <-- Moved to <run_game()>
    set_EventListeners()
    run_game()
});
