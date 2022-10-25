const material = document.getElementById('materiales');

const array =
    [
        { "title": "mat1", "val": 1 },
        { "title": "mat2", "val": 2 },
        { "title": "mat3", "val": 3 },
        { "title": "mat4", "val": 4 },
    ];

materiales(array, material);
// material.innerHTML = '<h1>Hola</h1>';
function materiales(array, container) {

    let opt = "";
    array.map((m) => {
        opt = opt + `<option value="${m.val}">${m.title}</option>`
    })
    data = `<select name="" id="">${opt}</select>`;
    container.innerHTML = data;

}
