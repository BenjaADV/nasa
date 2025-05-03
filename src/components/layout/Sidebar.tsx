export default function Sidebar() {
    return (
      <aside className="w-64 bg-zinc-100 dark:bg-zinc-900 p-4">
        <nav>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/about">Acerca</a></li>
          </ul>
        </nav>
      </aside>
    );
  }