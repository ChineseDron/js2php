(function() {

function assert_feq(a, b) {
	assert(Math.abs(a - b) < 0.00000001);
}

test("sin", function() {
	assert_feq(0, Math.sin(0));
	assert_feq(1, Math.sin(Math.PI / 2));
	assert_feq(0, Math.sin(Math.PI));
	assert_feq(-1, Math.sin(Math.PI * 3 / 2));
	assert_feq(0, Math.sin(Math.PI * 2));
});

test("cos", function() {
	assert_feq(1, Math.cos(0));
	assert_feq(0, Math.cos(Math.PI / 2));
	assert_feq(-1, Math.cos(Math.PI));
	assert_feq(0, Math.cos(Math.PI * 3 / 2));
	assert_feq(1, Math.cos(Math.PI * 2));
});

test("tan", function() {
	assert_feq(0, Math.tan(0));
});

test("sqrt", function() {
	assert_feq(0, Math.sqrt(0));
	assert_feq(4, Math.sqrt(16));
	assert_feq(Math.PI, Math.sqrt(Math.PI * Math.PI));
  assert(isNaN(Math.sqrt(-1)));
});

test("max", function() {
    assertEqual(-Infinity, Math.max());
    assertEqual(10, Math.max(10));
    assertEqual(20, Math.max(0.5, 20));
    assert(isNaN(Math.max(1, 2, NaN, 3, 4)));
});

test("min", function() {
    assertEqual(Infinity, Math.min());
    assertEqual(10, Math.min(10));
    assertEqual(0.5, Math.min(0.5, 20));
    assert(isNaN(Math.min(1, 2, NaN, 3, 4)));
});

test("parseInt", function() {
  assertEqual(123, parseInt("123"));
  assertEqual(123, parseInt("123", 10));
  assertEqual(123, parseInt("0123", 10));
  assertEqual(123, parseInt("0173"));
  assertEqual(123, parseInt("173", 8));
  assertEqual(123, parseInt("0x7b"));
  assertEqual(123, parseInt("0X7B"));
  assertEqual(123, parseInt("7b", 16));
  
  assert(isNaN(parseInt("123", 1)));
  assert(isNaN(parseInt("123", 37)));
  assert(isNaN(parseInt("f00")));
});

test("parseFloat", function() {
    assertEqual(3.14, parseFloat("3.14"));
    assertEqual(3.14, parseFloat("314e-2"));
    assertEqual(3.14, parseFloat("0.0314E+2"));
    assertEqual(3.14, parseFloat("3.14more non-digit characters"))
    assertEqual(3.14, parseFloat("  \t3.14"));
    assert(isNaN(parseFloat("what")));
    assert(isNaN(parseFloat("")));
    assert(isNaN(parseFloat("FF2")));
});

test("pow", function() {
  assertEqual(27, Math.pow(3, 3));
  assertEqual(4, Math.pow(16, 0.5));
  assertEqual(1024, Math.pow(16, 2.5));
  assert(isNaN(Math.pow(-1, 0.5)));
})

})();
