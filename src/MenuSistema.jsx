import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

function MenuSistema (props) {

   return(
       <>
           <Menu inverted>
              
               <Menu.Item
                   content='Home'
                   active={props.tela === 'Tela inicial'}
                   as={Link}
                   to='/'
               />

               <Menu.Item
                   content='cliente'
                   active={props.tela === 'Cadastro Cliente'}
                   as={Link}
                   to='/form-cliente'
               />
                <Menu.Item
                   content='agendamento'
                   active={props.tela === 'Agendamento'}
                   as={Link}
                   to='/form-agendamento'
               />
           </Menu>
       </>
   )
}
export default MenuSistema