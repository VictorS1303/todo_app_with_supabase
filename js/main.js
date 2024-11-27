// DOM Elements
const addTodoFormDialog = document.getElementById('add_todo_form_dialog')
const openAddTodoFormBtn = document.getElementById('open_add_todo_form_btn')
const addTodoInputForm = document.getElementById('add_todo_input_form')
const submitAddTodoBtn = document.getElementById('submit_add_todo_btn')
const updateTodoFormDialog = document.getElementById('update_todo_form_dialog')
const updateTodoInputForm = document.getElementById('update_todo_form_dialog')
const submitUpdateTodoBtn = document.getElementById('submit_update_todo_btn')
const todoListSection = document.getElementById('todo_list_section')
const todoListContainer = document.getElementById('todo_list_container')

// EVENT LISTENERS //
openAddTodoFormBtn.addEventListener('click', openAddTodoFormDialog)
submitAddTodoBtn.addEventListener('click', (e) => submitAddTodoForm(e))
updateTodoInputForm.addEventListener('submit', (e) => submitUpdateTodoForm(e))
todoListContainer.addEventListener('click', (e) => determineTodoAction(e))


// --- Todo Form Dialogs ---
// Add Todo Form Dialog
function openAddTodoFormDialog()
{
    addTodoFormDialog.showModal()
}

function closeAddTodoFormDialog()
{
    addTodoFormDialog.close()
}

function closeUpdateTodoFormDialog()
{
    updateTodoFormDialog.close()
}


// --- Todo Form Submission Handlers ---
// Submit Add Todo Form
function submitAddTodoForm(e)
{
    e.preventDefault()
    createTodo()
}

// Submit Update Todo Form
function submitUpdateTodoForm(e)
{
    e.preventDefault()
    updateTodoData()
    closeUpdateTodoFormDialog()
}

// Handle Todo Update
function updateTodoData()
{
    const updatedText = getFormData() // Get the updated text from the form
    console.log('Updated Todo Text:', updatedText)
    // Update the todo item in your list here
}


// --- Todo Item Actions ---
// Determine Todo Action (Complete, Update, Delete)
function determineTodoAction(e)
{
    if(e.target.matches('.complete-todo-btn'))
    {
        completeTodo()
    }
    else if(e.target.matches('.update-todo-btn'))
    {
        updateTodo()
    }
    else if(e.target.matches('.delete-todo-btn'))
    {
        deleteTodo()
    }
}

// Complete Todo
function completeTodo()
{
    console.log('Todo completed!')
}

// Update Todo
function updateTodo()
{
    updateTodoInputForm.showModal()
}

// Delete Todo
function deleteTodo()
{
    console.log('Delete todo!')
}


// --- Todo Item Creation ---
// Create Todo List Item
function createTodoListItem()
{
    const todoLI = createTodoLI('todo-list-item')
    const todoSpan = createTodoSpan('todo-text')
    const todoControlButtonsContainer = createTodoControlButtonsContainer('container todo-list-controls-buttons-container') 
    const completeTodoBtn = createCompleteTodoControlButton()
    const completeTodoBtnIcon = createCompleteTodoControlButtonIcon()
    const updateTodoBtn = createUpdateTodoControlButton()
    const updateTodoBtnIcon = createUpdateTodoControlButtonIcon()
    const deleteTodoBtn = createDeleteTodoControlButton()
    const deleteTodoBtnIcon = createDeleteTodoControlButtonIcon()

    // Appending from outermost parent inwards
    todoListSection.appendChild(todoListContainer)
    todoListContainer.appendChild(todoLI)
    todoLI.append(todoSpan, todoControlButtonsContainer)
    todoControlButtonsContainer.append(completeTodoBtn, updateTodoBtn, deleteTodoBtn)

    completeTodoBtn.appendChild(completeTodoBtnIcon)
    updateTodoBtn.appendChild(updateTodoBtnIcon)
    deleteTodoBtn.appendChild(deleteTodoBtnIcon)
}

// Create Todo LI
function createTodoLI(todoLIClasses)
{
    const todoLI = document.createElement('li')
    todoLI.classList = todoLIClasses
    return todoLI
}

// Create Todo Text
function createTodoSpan(todoSpanClasses)
{
    const todoTextSpan = document.createElement('span')
    todoTextSpan.textContent = getFormData()
    todoTextSpan.classList = todoSpanClasses
    return todoTextSpan
}

// Create Todo Control Buttons Container
function createTodoControlButtonsContainer(todoControlButtonsContainerClasses)
{
    const todoControlButtonsContainer = document.createElement('div')
    todoControlButtonsContainer.classList = todoControlButtonsContainerClasses
    return todoControlButtonsContainer
}


// --- Todo Control Buttons ---
// Create Control Button
function createTodoControlButton(todoControlButtonClasses)
{
    const todoControlButton = document.createElement('button')
    todoControlButton.classList = todoControlButtonClasses
    return todoControlButton
}

// Create Control Button Icon
function createControlTodoButtonIcon(controlTodoButtonIconClasses)
{
    const controlTodoButtonIcon = document.createElement('i')
    controlTodoButtonIcon.classList = controlTodoButtonIconClasses
    return controlTodoButtonIcon
}

// Complete Todo Button
function createCompleteTodoControlButton()
{
    const completeTodoBtn = createTodoControlButton('complete-todo-btn')
    return completeTodoBtn
}

// Complete Todo Button Icon
function createCompleteTodoControlButtonIcon()
{
    const completeTodoControlButtonIcon = createControlTodoButtonIcon('fa-solid fa-check')
    return completeTodoControlButtonIcon
}

// Update Todo Button
function createUpdateTodoControlButton()
{
    const updateTodoBtn = createTodoControlButton('update-todo-btn')
    return updateTodoBtn
}

// Update Todo Button Icon
function createUpdateTodoControlButtonIcon()
{
    const updateTodoControlButtonIcon = createControlTodoButtonIcon('fa-solid fa-pencil-alt')
    return updateTodoControlButtonIcon
}

// Delete Todo Button
function createDeleteTodoControlButton()
{
    const deleteTodoBtn = createTodoControlButton('delete-todo-btn')
    return deleteTodoBtn
}

// Delete Todo Button Icon
function createDeleteTodoControlButtonIcon()
{
    const deleteTodoControlButtonIcon = createControlTodoButtonIcon('fa-solid fa-trash-alt')
    return deleteTodoControlButtonIcon
}


// --- Utility Functions ---
// Get Form Data
function getFormData()
{
    const formData = new FormData(addTodoInputForm)
    const inputData = formData.get('todo_input')
    return inputData
}

// Create Todo
function createTodo()
{
    const todoText = getFormData()

    if (todoText)
    {
        createTodoListItem(todoText)
        addTodoInputForm.reset()
    }

    closeAddTodoFormDialog()
}
