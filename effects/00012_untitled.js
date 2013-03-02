function effect(cube) {
    cube().off();
    cube({x: 3, y: 4}).on();
}