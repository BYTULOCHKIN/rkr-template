import type { HomeExampleProps } from './types';
import clsx from 'clsx';
import Counter from './components/Counter';
import s from './style.module.css';

const Home: React.FC<HomeExampleProps> = () => {
    return (
        <main className={clsx(s.wrap, 'full-height')}>
            <div className={s.inner}>
                <header className={s.header}>
                    <svg
                        className={s.icon}
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <rect x="10" y="10" width="80" height="80" rx="16" fill="currentColor" opacity="0.12" />
                        <text
                            x="50"
                            y="62"
                            textAnchor="middle"
                            fontSize="32"
                            fontWeight="800"
                            fontFamily="system-ui, sans-serif"
                            fill="currentColor"
                            letterSpacing="-1"
                        >
                            RKR
                        </text>
                    </svg>
                    <h1 className={s.title}>
                        <strong className={s.brand}>rkr-template</strong> <br />
                        <span className={s.vite}>Vite</span> + <span className={s.react}>React</span> +{' '}
                        <span className={s.typescript}>TypeScript</span> +{' '}
                        <span className={s['tanstack-router']}>TanStack Router</span>
                    </h1>
                </header>
                <section className={s.content}>
                    <Counter />
                    <p className={s.description}>
                        Start editing <code>src/modules/Home/index.tsx</code> to start your project
                    </p>
                </section>
            </div>
            <footer className={s.footer}>&copy;&nbsp;{new Date().getFullYear()}, Ruslan Krasiuk</footer>
        </main>
    );
};

export default Home;
