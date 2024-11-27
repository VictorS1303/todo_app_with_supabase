const addTodoFormDialog = document.getElementById('add_todo_form_dialog')
const openAddTodoFormBtn = document.getElementById('open_add_todo_form_btn')
const addTodoForm = document.getElementById('add_todo_form')
const submitTodoBtn = document.getElementById('submit_todo_btn')

// EVENT LISTENERS //
openAddTodoFormBtn.addEventListener('click', openAddTodoFormDialog)
submitTodoBtn.addEventListener('click', (e) => submitTodoForm(e))

// FUNCTIONS //

function openAddTodoFormDialog()
{
    addTodoFormDialog.showModal()
}

addTodoFormDialog.showModal()


function closeAddTodoFormDialog()
{
    addTodoFormDialog.close()
}


function submitTodoForm(e)
{
    e.preventDefault()
    createTodo()
    closeAddTodoFormDialog()
}


function createTodo()
{
    const formData = new FormData(addTodoForm)
    const inputData = formData.get('name')
    return inputData
}

createTodo()