    //SIDEBAR
    const menuItems = document.querySelectorAll('.menu-item');
//MESAGES
    const messagesNotification = document.querySelector('#messages-notifications');
    const messages = document.querySelector('.messages');
    const message = messages.querySelectorAll('.message');
    const messageSearch = document.querySelector('#message-search');


    //THEME
    const theme = document.querySelector('#theme');
    const themeModal =document.querySelector('.customize-theme');
    const fontSizes = document.querySelectorAll('.choose-size span');
    var root = document.querySelector(':root');
    const colorPalette = document.querySelectorAll('.chose-color span');


//===================SIDEBAR ==

// remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notification-popur').style.display = 'none';
        } else{
            document.querySelector('.notification-popur').style.display ='block'
            document.querySelector('#notifications .notification-count').style.display = 'none';

        }
    })
})
//MESSAGES========

const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    
    message.forEach(chat =>{
        let name = chat.querySelector('h5').textContent.toLocaleLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';

        } else{
            chat.style.display = 'none';
        }
    })
}

    messageSearch.addEventListener('keyup', searchMessage);






//higghtlight messages card whenmessages menu item is clicked
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem  var(--primary)';
    messagesNotification.querySelector('.notifacation-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none'
    },2000) 
})

// THEME DISPLAY CUSTOMIZATION


//opens modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}


const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
} 
//close modal 
themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', openThemeModal);



//font sizes

// remoove active class from spans or font size selectors
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

fontSizes.forEach(size => {
   

   size.addEventListener('click', () => {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle('active');

    if(size.classList.contains('font-size-1')){
        fontSize = '10px';
        root.style.setProperty('--top-lef', '5.4rem');
        root.style.setProperty('--top-right', '5.4rem');
    } else if(size.classList.contains('font-size-2')){
        fontSize = '13px';
        root.style.setProperty('--top-lef', '5.4rem');
        root.style.setProperty('--top-right', '-7rem');
    } else if(size.classList.contains('font-size-3')){
        fontSize = '16px';
        root.style.setProperty('--top-lef', '-2rem');
        root.style.setProperty('--top-right', '-17rem');
    } else if(size.classList.contains('font-size-4')){
        fontSize = '19px';
        root.style.setProperty('--top-lef', '-5rem');
        root.style.setProperty('--top-right', '-25rem');
    } else if(size.classList.contains('font-size-5')){
        fontSize = '22px';
        root.style.setProperty('--top-lef', '-10rem');
        root.style.setProperty('--top-right', '-33rem');
    }

    // change font size of the root html element
    document.querySelector('html').style.fontSize = fontSize;

   })
})

//change primary colors

colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;

        if(color.classList.contains('color-1')){
            primaryHue = 252;
        } else if(color.classList.contains('color-2')){
            primaryHue = 52;
        } else if(color.classList.contains('color-3')){
            primaryHue = 352;
        } else if(color.classList.contains('color-4')){
            primaryHue = 152;
        } else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})