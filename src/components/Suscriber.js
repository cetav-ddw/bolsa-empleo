import React from "react";



function Suscriber(){

    return(
        <div>
            <link href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css" />
            <style type="text/css" dangerouslySetInnerHTML={{__html:"\n\t#mc_embed_signup{background:#fff; clear:left; font:14px 'Poppins', sans-serif; }\n\t/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.\n\t   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */\n" }} />
            <div id="mc_embed_signup">
            <form action="https://gmail.us5.list-manage.com/subscribe/post?u=89a21ad8fc7a9ac4952f237b8&id=3db6decf58" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                <div id="mc_embed_signup_scroll">
                <label htmlFor="mce-EMAIL" style={{color: '#292929', fontFamily: 'Poppins", sans-serif', fontWeight: 'bold', fontSize:'26px'}}>Suscribete a nuestro newsletter</label>
                <p style={{color: '#7C7C7C', fontFamily: '"Poppins", sans-serif', fontWeight: 'bold', fontSize:'16px'}}>We have so many ideas for new features that can help our partners manage their units even more efficiently. We promise you that we wont mail bomb you, just once in a month.</p>
                <input type="email" defaultValue name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required  />
                {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_89a21ad8fc7a9ac4952f237b8_3db6decf58" tabIndex={-1} defaultValue /></div>
                <div className="clear"><input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"  style={{backgroundColor: '#5755CC', fontFamily: '"Poppins", sans-serif', fontWeight: 'bold', borderRadius: '5px'}} /></div>
                </div>
            </form>
            </div>
        </div>
        
    )

}



export default Suscriber;


