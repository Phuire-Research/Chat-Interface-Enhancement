import { useState } from 'react';
import styles from './App.module.scss';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <span className={styles.Left}>REFERENCE TEMPLATE</span>
            <h3>ChatGPT ⪤ Open-Assistant <span>~ Creative Enhancement</span></h3>
            <div />
            <div>
                <blockquote className={styles.Chatbox}>
                    <p>
                        {' '}
                        <span>[USER]</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                    </p>
                </blockquote>
                <blockquote className={styles.Grey}>
                    <p>
                        {' '}
                        <span className={styles.Target}>[<span>Objective Target</span>] <textarea placeholder='This Would Change options Below And be First Filled in by an Agent. Then Based on Current User Input Reactively regenerate Conversations Paths via the Red, Green, and Blue Outputs. These outputs Would the Start of an ~Agent Response to Be Completed in Output by Said Agent in Output'></textarea> </span> 
                    </p>
                </blockquote>
                <blockquote className={styles.Red}>
                    <p>
                        {' '}
                        <span className={styles.OptionLabel}>[Option] </span> 
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    </p>
                </blockquote>
                <blockquote className={styles.Green}>
                    <p>
                        {' '}
                        <span className={styles.OptionLabel}>[Option] </span> 
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    </p>
                </blockquote>
                <blockquote className={styles.Active}>
                    <p>
                        {' '}
                        <span className={styles.OptionLabel}>[Option] </span> 
                        tempor incididunt ut labore et dolore magna aliqua. Sapien et ligula ullamcorper
                    </p>
                </blockquote>
                <blockquote className={styles.Blue}>
                    <p>
                        {' '}
                        <span className={styles.Agent}>[AGENT] </span> 
                        tempor incididunt ut labore et dolore magna aliqua. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Morbi tristique senectus et netus. Non pulvinar neque laoreet suspendisse interdum. Viverra suspendisse potenti nullam ac tortor vitae. Est velit egestas dui id ornare arcu odio ut sem. Elit pellentesque habitant morbi tristique senectus et netus et. Mattis ullamcorper velit sed ullamcorper. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Justo eget magna fermentum iaculis eu.
                    </p>
                </blockquote>
            </div>
        <div className={styles.Footer}>
            <a href="https://creativecommons.org/licenses/by/4.0/legalcode">Creative Commons 4.0</a>
        </div>
        </div>
    );
}

export default App;
