import React from "react";
import style from './Contacts.module.css';

export const Contacts = () => {
    return (
        <div className={style.contactsWrapper}>
            <div className={style.contactsContainer}>
                <h3>Contacts</h3>
                <div className={style.form}>
                    <label>
                        <input type="text" placeholder={'name'}/>
                        <input type="text" placeholder={'e-mail'}/>
                        <textarea></textarea>
                    </label>
                    <button>Send</button>
                </div>

            </div>
        </div>
    )
}
