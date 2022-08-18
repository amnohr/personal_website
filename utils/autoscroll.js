
// simple function to scroll to given element_id if the user doesn't scroll within 2 seconds
export default function autoscroll(element_id){

    // check if window is defined to prevent server render error.
    if (typeof window !== 'undefined') {
        // element we want to scroll to
        let scroll_element = document.getElementById(element_id);
        if(scroll_element){
            // scroll to about section after 2 seconds
            let timer_id = setInterval(
                () => {
                    cancel_scroll();
                    scroll_element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                        inline: 'center'
                    });
                },
                2000
            );

            // clear timer and remove scroll-listener
            function cancel_scroll(){
                clearInterval(timer_id);
                window.removeEventListener("scroll", cancel_scroll);
            }
            // cancel auto_scroll if user scroll first
            window.addEventListener("scroll", cancel_scroll);
        }

    }
}

