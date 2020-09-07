var setTheme = () => {
    var checkbox = document.querySelectorAll('input[name=mode]'),
        lightThemeElements = [...document.getElementsByClassName('light-theme-element')],
        darkThemeElements = [...document.getElementsByClassName('dark-theme-element')],

        /*addClass = (elements, classElement) => {
            elements.forEach(item => {
                item.add(classElement);
            })
        },
        removeClass = (elements, classElement) => {
            elements.forEach(item => {
                item.classList.remove(classElement);
            })
        },*/

        addTheme = input => {
            input.addEventListener('change', function() {
                if (document.body.classList.contains('dark-theme')) {
                    init();
                } else {
                    trans();
                    console.log('lightThemeElements: ', lightThemeElements);
                    document.body.classList.add('dark-theme');
                    document.body.classList.remove('light-theme');
                    lightThemeElements.forEach(item => {
                        item.classList.add('hidden');
                    })
                    darkThemeElements.forEach(item => {
                        item.classList.remove('hidden');
                    })
                }
            })
        },

        trans = () => {
            document.body.classList.add('transition');
            window.setTimeout(() => {
                document.body.classList.remove('transition');
            }, 1000)
        },

        init = () => {
            trans()
            console.log('lightThemeElements: ', lightThemeElements);
            console.log('document.body.classList: ', document.body.classList);
            /*addClass([...document.body.classList], 'light-theme');
            changeClass(document.body, 'remove', 'dark-theme');
            changeClass(darkThemeElements, 'hidden');
            changeClass(lightThemeElements, 'remove', 'hidden');*/
            document.body.classList.add('light-theme');
            document.body.classList.remove('dark-theme');
            darkThemeElements.forEach(item => {
                item.classList.add('hidden');
            })
            lightThemeElements.forEach(item => {
                item.classList.remove('hidden');
            })
        }

    console.log(typeof(darkThemeElements));
    console.log(toString(darkThemeElements));
    //console.log(darkThemeElements[0].classList.remove('hidden'));
    checkbox.forEach(element => addTheme(element));
    console.log('lightThemeElements: ', lightThemeElements);
    init();


    //light-theme-element
};

export { setTheme };