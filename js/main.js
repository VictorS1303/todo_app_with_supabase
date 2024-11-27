const addTodoFormDialog = document.getElementById('add_todo_form_dialog')
const openAddTodoFormBtn = document.getElementById('open_add_todo_form_btn')
const submitTodoBtn = document.getElementById('submit_todo_btn')

// EVENT LISTENERS //
openAddTodoFormBtn.addEventListener('click', openAddTodoFormDialog)
submitTodoBtn.addEventListener('click', (e) => submitTodoForm(e))

// FUNCTIONS //

function openAddTodoFormDialog()
{
    console.log('Form dialog opened')
}
addTodoFormDialog.showModal()

function closeAddTodoFormDialog()
{
    addTodoFormDialog.close()
}


function submitTodoForm(e)
{
    e.preventDefault()
    closeAddTodoFormDialog()
}
