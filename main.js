function preload()
{

}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(11, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw()
{
    circle(30, 30, 30)
}

function take_snapshot()
{
    save('student_name.png');
}