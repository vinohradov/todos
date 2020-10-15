(function() {
    let todos = document.getElementById('todos');
    let importantInput = document.getElementById('important-input');
    let unimportantInput =  document.getElementById('unimportant-input');
    let importantBtn =  document.getElementById('important-btn');
    let unimportantBtn = document.getElementById('unimportant-btn');
    let removeBtn = document.getElementById('remove-todos');

    function createTodoElement(text, className){
        let div = document.createElement('div');
        div.classList.add(className);
        div.classList.add('todo-item');
        div.innerHTML = `
                <div class="todo-text">${text}</div>
                <div class="sign"></div>
                <div class="mark"><span>&#10004;</span></div>
        `;

        div.addEventListener('click', function () {
            div.classList.toggle('complete');

            let completed = document.getElementsByClassName('complete');
            let competedAmount = completed.length;

            if (competedAmount > 0){
                removeBtn.innerHTML = `Выбрано: ${competedAmount}`;
            } else {
                removeBtn.innerHTML = '';
            }
        });
        
        return div;
    }

    importantBtn.addEventListener('click', function(){
        let todoText = importantInput.value;

        if (!todoText) return;
        let todo = createTodoElement(todoText, 'important');

        importantInput.value = '';
        todos.appendChild(todo);
    });

    unimportantBtn.addEventListener('click', function(){
        let todoText = unimportantInput.value;

        if (!todoText) return;
        let todo = createTodoElement(todoText, 'unimportant');

        unimportantInput.value = '';
        todos.appendChild(todo);
    });

})();