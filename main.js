
$('#image').attr('src', 'assets/images/guysMeme.jpg')
$('button').on('click', function(){alert('you cliked me')})

function sayHello () {
alert(this.name + " says hello!");
}
var alice = { name: "Alice" };
// ???
sayHello.call(alice)