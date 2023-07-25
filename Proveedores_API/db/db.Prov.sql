create database "smv_Proveedores";

/c smv_Proveedores;

create table "providersProfile" (
    "id" serial primary key,
    "providerId" int not null,
    "providerName" varchar(100) not null,
    "socialReason" varchar(100) not null,
    "discountSale" int DEFAULT 0,
    "address" varchar(100),
    "col" varchar(100),
    "rfc" varchar(100) not null,
    "city" varchar(100),
    "state" varchar(100),
    "postalCode" varchar(100),
    "country" varchar(100),
    "contact" varchar(200),
    "phone" varchar(100) not null,
    "email" varchar(100) not null,
    "created_At" timestamp default current_timestamp,
    "updated_At" timestamp default current_timestamp,
    "isDeleted" boolean default false 
);

create table "providerLI" (
    "id" serial primary key,
    "userName" varchar(100) not null unique,
    "password" varchar(100) not null,
    "setPassword" boolean default false,
    "role" varchar(100) not null DEFAULT 'provider',
    "refreshToken" varchar(200),
    "created_At" timestamp default current_timestamp,
    "updated_At" timestamp default current_timestamp,
    "isDeleted" boolean default false
);


create table "providersLog" (
    "id" serial primary key,
    "responsibleUser" varchar(100),
    "affectedTable" varchar(100) not null,
    "action" varchar(100) not null,
    "oldData" JSONB,
    "newData" JSONB,
    "created_At" timestamp default current_timestamp,
    "updated_At" timestamp default current_timestamp,
    "isDeleted" boolean default false
);


CREATE OR REPLACE FUNCTION update_updated_at_column()
    RETURNS TRIGGER
    AS $$
    BEGIN
        IF NEW."isDeleted" <> OLD."isDeleted" THEN
            UPDATE "providerLI"
            SET "isDeleted" = NEW."isDeleted", "updated_At" = now()
            WHERE "id" = OLD."providerId";
            END IF;
            RETURN NEW;
    END;
    $$
    LANGUAGE plpgsql;

CREATE TRIGGER update_isDeleted_providerLI_profileProv
    AFTER UPDATE
    ON "providersProfile"
    FOR EACH ROW
    EXECUTE PROCEDURE update_updated_at_column();


------------------------------------------------------------------------------- funcion para actualizar la tabla providersLI, cuando se actualice la tabla providersProfile -----------------------------------------------------------------------------------------------------------------

alter table "providersProfile"
add constraint fk_profile_providerLI foreign key ("providerId") references "providerLI" ("id");


------------------------------------------------------------------------------------   Llaves foraneas   ------------------------------------------------------------------------------------------------------------

-- userDEFAULT: admin
-- passDEFAULT: admin

--DATA providersProfileDEFAULT: admin
--providerID: 1
--providerName: Proveedor 1
--socialReason: Razon social 1
--discountSale: 10
--address: Calle 1
--col: Colonia 1
--rfc: RFC 1
--city: Ciudad 1
--state: Estado 1
--postalCode: Codigo postal 1
--country: Pais 1
--contact: Contacto 1
--phone: Telefono 1
--email: Correo 1

--DATA usersDEFAULT: admin
--providerId: 1
--userName: Usuario 1
--lastName: Apellido 1
--email: Correo 1
--contact: Contacto 1
--phone: Telefono 1
--branchAssigned: Sucursal 1
--commission: 10
--expireDate: 2021-12-31

--DATA providerProductsDEFAULT: admin
--providerId: 1
--productName: Producto 1
--manofacturerCode: Codigo de fabricante 1
--companyCode: Codigo de empresa 1
--brand: Marca 1
--model: Modelo 1
--retailPrice: 100
--wholesalePrice: 90
--satProductCode: Codigo SAT 1
--satUnitCode: Codigo SAT 1
--unitMeasurement: Unidad de medida 1

--DATA providerOrdersDEFAULT: admin
--providerId: 1
--userId: 1
--productId: 1
--productDescription: Descripcion 1
--productPrice: 100
--productQuantity: 1
--total: 100


-------------------------------------------------------------------------------------------- Inserciones DEFAULT  ----------------------------------------------------------------------------------------------------








CREATE OR REPLACE FUNCTION update_provider_profile(
	_id INT,
    provider_name VARCHAR(100),
    social_reason VARCHAR(100),
    discount_sale INT,
    _address VARCHAR(100),
    _col VARCHAR(100),
    _rfc VARCHAR(100),
    _city VARCHAR(100),
    _state VARCHAR(100),
    postal_code VARCHAR(100),
    _country VARCHAR(100),
    _contact VARCHAR(200),
    _phone VARCHAR(100),
    _email VARCHAR(100),
    responsible_user VARCHAR(100)
)
RETURNS VOID AS $$
DECLARE
    provId INT;
    old_data JSONB;
    new_data JSONB;
BEGIN
    old_data := to_jsonb(t)
    FROM "providersProfile" t
    WHERE "id" = _id;

    UPDATE "providersProfile"
    SET
        "providerName" = provider_name,
        "socialReason" = social_reason,
        "discountSale" = discount_sale,
        "address" = _address,
        "col" = _col,
        "rfc" = _rfc,
        "city" = _city,
        "state" = _state,
        "postalCode" = postal_code,
        "country" = _country,
        "contact" = _contact,
        "phone" = _phone,
        "email" = _email,
        "updated_At" = current_timestamp
    WHERE "id" = _id RETURNING "providerId" INTO provId;

    new_data := jsonb_build_object(
        'id', _id,
        'providerId', provId,
        'providerName', provider_name,
        'socialReason', social_reason,
        'discountSale', discount_sale,
        'address', _address,
        'col', _col,
        'rfc', _rfc,
        'city', _city,
        'state', _state,
        'postalCode', postal_code,
        'country', _country,
        'contact', _contact,
        'phone', _phone,
        'email', _email
    );

    INSERT INTO "providersLog" ("responsibleUser", "affectedTable", "action", "oldData", "newData")
    VALUES (responsible_user, 'providersProfile', 'update', old_data, new_data);

    RETURN;
END;
$$ LANGUAGE plpgsql;



CREATE OR REPLACE FUNCTION insert_provider_profile(
    provider_id INT,
    provider_name VARCHAR(100),
    social_reason VARCHAR(100),
    discount_sale INT,
    _address VARCHAR(100),
    _col VARCHAR(100),
    _rfc VARCHAR(100),
    _city VARCHAR(100),
    _state VARCHAR(100),
    postal_code VARCHAR(100),
    _country VARCHAR(100),
    _contact VARCHAR(200),
    _phone VARCHAR(100),
    _email VARCHAR(100),
    responsible_user VARCHAR(100)
)
RETURNS INT AS $$
DECLARE
    new_id INT;
    new_data JSONB;
BEGIN
    INSERT INTO "providersProfile" ("providerId", "providerName", "socialReason", "discountSale", "address", "col", "rfc", "city", "state", "postalCode", "country", "contact", "phone", "email")
    VALUES (provider_id, provider_name, social_reason, discount_sale, _address, _col, _rfc, _city, _state, postal_code, _country, _contact, _phone, _email) RETURNING "id" INTO new_id;
    
    new_data := jsonb_build_object(
        'id', new_id,
        'providerId', provider_id,
        'providerName', provider_name,
        'socialReason', social_reason,
        'discountSale', discount_sale,
        'address', _address,
        'col', _col,
        'rfc', _rfc,
        'city', _city,
        'state', _state,
        'postalCode', postal_code,
        'country', _country,
        'contact', _contact,
        'phone', _phone,
        'email', _email
    );
    
    INSERT INTO "providersLog" ("responsibleUser", "affectedTable", "action", "oldData", "newData")
    VALUES (responsible_user, 'providersProfile', 'insert', '{}'::JSONB, new_data);
    
    RETURN new_id;
END;
$$ LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION delete_provider_profile(
    _id INT,
    responsible_user VARCHAR(100)
)
RETURNS VOID AS $$
DECLARE
    old_data JSONB;
BEGIN
    old_data := to_jsonb(t)
    FROM "providersProfile" t
    WHERE "id" = _id;

    UPDATE "providersProfile"
    SET "isDeleted" = true, "updated_At" = current_timestamp
    WHERE "id" = _id;

    INSERT INTO "providersLog" ("responsibleUser", "affectedTable", "action", "oldData", "newData")
    VALUES (responsible_user, 'providersProfile', 'delete', old_data, '{}'::JSONB);

    RETURN;
END;

$$ LANGUAGE plpgsql;

