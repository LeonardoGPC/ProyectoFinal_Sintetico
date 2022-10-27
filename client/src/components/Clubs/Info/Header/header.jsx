import React from "react";
import land from './header.module.css';
import { Link } from "react-router-dom";

export default function Header() {

    return(
        <div className={land.main}>
            <a className={land.button} href='#1'>Ver planes</a>
            <h1 className={land.title}>Contrata tu plan y publica<br/>tu cancha ahora mismo</h1>
            <div className={land.cards}>
                <div className={land.card}>
                    <h3 className={land.card_title}>Mayor alcance</h3>
                    <img className={land.card_img} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAmpJREFUSEuFluF900AMxf+aADNB0wkSJmiyQbtBsgFM0HYDmACYoGECzAQ4G4QJaiYQP93Jtu5yof7k+HSnp/eedBHsEUDTmz+CoOjF9xhaLqZf/ql4X8Liqh/USBABNXClLAncDLXAzZPCZ5BxCWokbpcdKQhMLBQ9AY/AAOyAcSGsYjCgK5htplg+dkCPsEYZBHYqjFZrm4pSswQhBobC40KH0KOyFnRQ4QHlDrhHWKGy8YMGNFX4DeGHvzeFszz1Qq4E1hnjG0rnIKP3S6R12pYTlM8K5AV0E87+RRa/d/E3fqhVN8EYtNJughclM/S/gRVw8gWrZEAwWvaO8gg8C+xVeAw91DRITGDUTKhu/bBeYF00Ud7xwRP3plMg0uJ3ZR/k1tuDfg28G+qdt2fQZNZsB2oxG5SfFc2HZAAPndbOAjcqfPJkmZrMq2md3LV0xIz5Pchr1b1nhVvbJGFu5ARwADkK2mt20pIki7wO5f/VpJe8xj4Q+JO/Zw9ONp0oOju/jjomSXCmZrSd3wET/CU6WuCgBUVL1/Uq3Fknz9RMqJOLxHivE48g2zBMzNLb2b5Vd3eaD7pJnZzowipykWUAzZpAdlf0YLb2VmCMritDoLOGAvVO5ihglT2j8i45J+tkgienOMsnTcjjJC40KIaCNdxHn66tGVa5MvHgtmYsWLk2aRxWh3IP7BG62abCCU3UmcC9uc4rvuzkeL1FJ1QQr8+8HFiM+uU+sdtttml55MVV2gisqo9T+CFXVyS4cltM90h5c14UGCg1Fx0bsyjueeMfw/XQJrO1TVNrX1z6Meq/1ZRM/AOXcB0tQnsytgAAAABJRU5ErkJggg=="/>
                    <p className={land.card_paragraph}>10k vistas</p>
                </div>
                <div className={land.card}>
                    <h3 className={land.card_title}>Rentas Seguras</h3>
                    <img className={land.card_img} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAb5JREFUSEudle1RAyEQhp+twLGCxEqMHaQDtQInFSTpwA60Ay0hVmLSgR3gcOwBC8uZ8X4xwO3H+7EI8RMgTCv7TfujQ+e+BhNCDidXx9A8JZ0wBeoC1Pupdu3AVtrUvUV4IbDRuk8gRwin1P0YAtNBfa1avwOPMyBNqCNwWEK26sDlYEuQDyVoB/Kp+D6B7HX/AeRUSPQg6pjOdZ6Ae2AHvDYlHAT2Ab6AjQ9STDZQkf4wa+sW+MlyS4drgW+9kOJ4IHSZ7cb0v4AMVBzmBEtKd1WkxcxxbYVFOfm8bNV6niEauy1U2TsXCkE7iGKcr/Ze1Z3cZNT6G7BOB1c7+Qw8A1EY+fPIiRdXi2HHgJ8JcldGhZCMZnsofCqw9WyxtTV/po4TXHNMP4FT4h9IVccGlcoH+UqjSHVmC6y5VSvHeqvKlgN1EPmz3B0t8aoxr+dkz1OZJZ8PQ6IDkS3mHwkMk2OSVfblORoNmEU+GmU6s6h679qn1CG8N6OFqCTIqx/gppPvNYYWLjpljbfsNBA2BOIrtjIIOYapixe4BIgPUXp8ZuWWKdjmWRDnog+H07SdeR7DNQfGXP1c1Mp/AUmJvh+KExNcAAAAAElFTkSuQmCC"/>
                    <p className={land.card_paragraph}>Tenemos control<br/>de los usuarios</p>
                </div>
                <div className={land.card}>
                    <h3 className={land.card_title}>Gran beneficio</h3>
                    <img className={land.card_img} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAX9JREFUSEuNVluSwzAIw/c/tDu8hQ1O87FtEhZZSGK6iK9FRFu+1e/9AyvED2sgH9iMaNXbHiz/76qOAzVvpFkByKKZEoIt2kb8DdxQxkktykZtqZ40wOroGLpePddGmxZMlFxEy6UAABTq46TTIapVwiKtKy7Kc1McUXrRxFIGceOiVQ3yYNc0t3V0sxwA2icAHo2qW3KaAWB9tuUgRn/n4Kn6pVOc2N5sOO2gwZXGkoktLNWVTL9lsGibi7gwrjksQOp0H0ggiDKiAvBhjlMW3FjKQBkvc1157/K+ltcpmjbQQ/KfxkUxYyscMoWiCWWtu0ekhe5G8bkk2foOqyIG54q6aEXkaO0AmGQwHHLQ0m1bFtelMn8D1PUKNk1rBoChpq8NwHrwFFQDPNDIAAEUlw0iM4/taBoco61BA/Rww5GrhkH4JkekOjJ+5OBfm57iH/estRtFXeWa4S5K1z2S3AdwjmW/YTqAZ7SH0DwelxxcvcueO3/a1Oqr1B78AKiu4iILnjkWAAAAAElFTkSuQmCC"/>
                    <p className={land.card_paragraph}>¡El 100% de la renta<br/>será suyo!</p>
                </div>
            </div>
        </div>
    )
}