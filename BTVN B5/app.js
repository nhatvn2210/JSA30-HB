// Shortcut Function
function getByID(x)
{
    return document.getElementById(x);
}
// Function
function addComment(selectedInput, event)
{
    event.preventDefault();
    const comment = selectedInput.value;
    return comment;
}

function renderCommentList(selectedList)
{
    let htmls = "";
    for (let i in selectedList)
    {
        htmls += `<li> ${selectedList[i]} </li>`;
    }
    return htmls;
}
// DOM

const commentInput = getByID("comment-input");

const commentDisplayList = getByID("comment-display-list");

const addButton = getByID("add-button");

// Variable, Array & Object

let commentList = JSON.parse(localStorage.getItem("comment-list")) || [];

// Main srcipt

commentDisplayList.innerHTML = renderCommentList(commentList);

addButton.addEventListener('click', function (event){
    commentList.push(addComment(commentInput, event));
    localStorage.setItem("comment-list", JSON.stringify(commentList));
    commentDisplayList.innerHTML = renderCommentList(commentList);
})
