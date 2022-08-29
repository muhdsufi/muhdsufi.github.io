  import { h } from 'preact';
import Styles from './styles.module.scss';

function Nav() {
	return (
		<nav className={Styles.nav}>
			<a className={Styles.logolink} href="/"><button type="button" class="inline-flex text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-2xl text-sm px-5 py-2.5 text-center mr-2 mb-2">
                <div class='text-xl font-mono font-bold pt-0.5'>
                    Sufi
                </div>
            </button>
			</a>
			<a className={Styles.link} href="/projects">
				Projects
			</a>
		</nav>
		

	);
}
export default Nav;
