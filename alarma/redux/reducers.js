const initialPage = {
  page:0
}

export function Page(state=initialPage, action){
  var obj = Object.assign({}, state);
  
  
  
  switch(action.type){
    case "CHANGE_PAGE":
      //do something for the command
      obj.page = action.page;
      return obj;
      

      
    default: 
      return state;
  }
  
}