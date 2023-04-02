let AllCategory = document.querySelectorAll( ".category" );

fetch( "./js/aa.json" )
    .then( ( response ) => response.json() )
    .then( ( data ) =>
    {
        for ( let i = 0; i < AllCategory.length; i++ )
        {
            for ( let j = 0; j < 8; j++ )
            {
                let subcategory = document.createElement( "div" );
                subcategory.className = "subcategory d-flex gap-2 pe-auto";
                let p = document.createElement( "p" );
                p.className = "fw-bold text-secondary";
                let icon = document.createElement( "i" );
                icon.className =
                    "fa-solid fa-arrow-right mt-1 text-warning ms-4 ps-4 h5";

                p.textContent = data[ j ].title;
                subcategory.appendChild( icon );
                subcategory.appendChild( p );
                AllCategory[ i ].appendChild( subcategory );
            }
        }
    } );