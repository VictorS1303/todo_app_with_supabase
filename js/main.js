const addTodoFormDialog = document.getElementById('add_todo_form_dialog')
const openAddTodoFormBtn = document.getElementById('open_add_todo_form_btn')
const submitTodoBtn = document.getElementById('submit_todo_btn')
const todoListSection = document.getElementById('todo_list_section')
const todoListContainer = document.getElementById('todo_list_container')



// EVENT LISTENERS //
openAddTodoFormBtn.addEventListener('click', openAddTodoFormDialog)
submitTodoBtn.addEventListener('click', (e) => submitTodoForm(e))
todoListContainer.addEventListener('click', (e) => determineTodoAction(e))


// FUNCTIONS //

// Add Todo Form Dialog
function openAddTodoFormDialog()
{
    addTodoFormDialog.showModal()
}

function closeAddTodoFormDialog()
{
    addTodoFormDialog.close()
}


function submitTodoForm(e)
{
    e.preventDefault()
    closeAddTodoFormDialog()
}


// Determine Todo Action
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

createTodoListItem()


/* Todo Item Utility Functions */
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
    todoTextSpan.textContent = 'Do something!'
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


// Complete Todo
function completeTodo()
{
    console.log('Todo completed!')
}

// Update Todo
function updateTodo()
{
    console.log('Update todo!')
}

// Delete Todo
function deleteTodo()
{
    console.log('Delete todo!')
}