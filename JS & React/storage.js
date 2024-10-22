const addToLocalStorage = () => {
    const idInput = document.getElementById('sorage-id');
    const id = idInput.value;
    const valueInput = document.getElementById('sorage-value');
    const value = valueInput.value;

    localStorage.setItem(id, value);
    idInput.value = '';
    valueInput.value = '';
}