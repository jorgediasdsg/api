import sytle from './Sidebar.module.css';

// import { AddressBook } from 'phosphor-react'

//https://phosphoricons.com/

export function Sidebar() {
    return (
        <aside className={sytle.sidebar}>
            <img
                className={sytle.cover} src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
            />
            
            <div className={sytle.profile}>
                <img className={sytle.avatar} src="https://github.com/jorgediasdsg.png" />
                
                <strong>Jorge Dias</strong>
                <span>Developer</span>
            </div>

            <footer>
                <a href="#">
                    {/* <AddressBook size={20} /> */}
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}