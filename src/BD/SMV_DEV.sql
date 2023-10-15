PGDMP         	            	    {            SMV_DEV    15.3    15.3 w   �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16398    SMV_DEV    DATABASE     |   CREATE DATABASE "SMV_DEV" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE "SMV_DEV";
                postgres    false            �            1259    16399    abonoAplicadoEfectivo    TABLE     ^  CREATE TABLE public."abonoAplicadoEfectivo" (
    folio integer NOT NULL,
    usuario character varying NOT NULL,
    fecha date NOT NULL,
    comentario character varying NOT NULL,
    importe double precision NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date,
    id integer NOT NULL
);
 +   DROP TABLE public."abonoAplicadoEfectivo";
       public         heap    postgres    false            �            1259    17823    abonoAplicadoEfectivo_id_seq    SEQUENCE     �   CREATE SEQUENCE public."abonoAplicadoEfectivo_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public."abonoAplicadoEfectivo_id_seq";
       public          postgres    false    214            �           0    0    abonoAplicadoEfectivo_id_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public."abonoAplicadoEfectivo_id_seq" OWNED BY public."abonoAplicadoEfectivo".id;
          public          postgres    false    241            �            1259    16404    abonosAplicados    TABLE       CREATE TABLE public."abonosAplicados" (
    efectivo double precision,
    "tarjetaDebito" double precision,
    "tarjetaCredito" double precision,
    cheque double precision,
    credito double precision NOT NULL,
    "valesDespensa" double precision,
    transferencia double precision,
    deposito double precision,
    "saldoFavor" double precision NOT NULL,
    total double precision NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date,
    id integer NOT NULL
);
 %   DROP TABLE public."abonosAplicados";
       public         heap    postgres    false            �            1259    17844    abonosAplicados_id_seq    SEQUENCE     �   CREATE SEQUENCE public."abonosAplicados_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public."abonosAplicados_id_seq";
       public          postgres    false    215            �           0    0    abonosAplicados_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public."abonosAplicados_id_seq" OWNED BY public."abonosAplicados".id;
          public          postgres    false    242            �            1259    16407    abonosCancelados    TABLE       CREATE TABLE public."abonosCancelados" (
    efectivo double precision,
    "tarjetaDebito" double precision,
    "tarjetaCredito" double precision,
    cheque double precision,
    credito double precision NOT NULL,
    "valesDespensa" double precision,
    transferencia double precision,
    deposito double precision,
    "saldoFavor" double precision NOT NULL,
    total double precision NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date,
    id integer NOT NULL
);
 &   DROP TABLE public."abonosCancelados";
       public         heap    postgres    false            �            1259    17856    abonosCancelados_id_seq    SEQUENCE     �   CREATE SEQUENCE public."abonosCancelados_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."abonosCancelados_id_seq";
       public          postgres    false    216            �           0    0    abonosCancelados_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."abonosCancelados_id_seq" OWNED BY public."abonosCancelados".id;
          public          postgres    false    243            �           1259    19512    agregarProductoCotizacion    TABLE       CREATE TABLE public."agregarProductoCotizacion" (
    id integer NOT NULL,
    "codigoEmpresaa" integer NOT NULL,
    "codigoFabricante" integer NOT NULL,
    nombre character varying NOT NULL,
    marca character varying NOT NULL,
    existencia integer NOT NULL,
    bo integer NOT NULL,
    cantidad integer NOT NULL,
    precio double precision NOT NULL,
    descuento double precision NOT NULL,
    total double precision NOT NULL,
    imagen bytea NOT NULL,
    "idProducto" integer,
    "idCotizacion" integer
);
 /   DROP TABLE public."agregarProductoCotizacion";
       public         heap    postgres    false            �           1259    19510 ,   agregarProductoCotizacion_codigoEmpresaa_seq    SEQUENCE     �   CREATE SEQUENCE public."agregarProductoCotizacion_codigoEmpresaa_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 E   DROP SEQUENCE public."agregarProductoCotizacion_codigoEmpresaa_seq";
       public          postgres    false    494            �           0    0 ,   agregarProductoCotizacion_codigoEmpresaa_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public."agregarProductoCotizacion_codigoEmpresaa_seq" OWNED BY public."agregarProductoCotizacion"."codigoEmpresaa";
          public          postgres    false    492            �           1259    19511 .   agregarProductoCotizacion_codigoFabricante_seq    SEQUENCE     �   CREATE SEQUENCE public."agregarProductoCotizacion_codigoFabricante_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 G   DROP SEQUENCE public."agregarProductoCotizacion_codigoFabricante_seq";
       public          postgres    false    494            �           0    0 .   agregarProductoCotizacion_codigoFabricante_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public."agregarProductoCotizacion_codigoFabricante_seq" OWNED BY public."agregarProductoCotizacion"."codigoFabricante";
          public          postgres    false    493            �           1259    19509     agregarProductoCotizacion_id_seq    SEQUENCE     �   CREATE SEQUENCE public."agregarProductoCotizacion_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 9   DROP SEQUENCE public."agregarProductoCotizacion_id_seq";
       public          postgres    false    494            �           0    0     agregarProductoCotizacion_id_seq    SEQUENCE OWNED BY     i   ALTER SEQUENCE public."agregarProductoCotizacion_id_seq" OWNED BY public."agregarProductoCotizacion".id;
          public          postgres    false    491            �            1259    16410    agregarProductoRelacionado    TABLE     5  CREATE TABLE public."agregarProductoRelacionado" (
    imagen bytea NOT NULL,
    "codigoEmpresa" "char" NOT NULL,
    nombre character varying NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date,
    id integer NOT NULL,
    "idProducto" integer
);
 0   DROP TABLE public."agregarProductoRelacionado";
       public         heap    postgres    false            �            1259    17868 !   agregarProductoRelacionado_id_seq    SEQUENCE     �   CREATE SEQUENCE public."agregarProductoRelacionado_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 :   DROP SEQUENCE public."agregarProductoRelacionado_id_seq";
       public          postgres    false    217            �           0    0 !   agregarProductoRelacionado_id_seq    SEQUENCE OWNED BY     k   ALTER SEQUENCE public."agregarProductoRelacionado_id_seq" OWNED BY public."agregarProductoRelacionado".id;
          public          postgres    false    244            �            1259    16415    agregarProvedor    TABLE     �   CREATE TABLE public."agregarProvedor" (
    provedor character varying NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date,
    id integer NOT NULL
);
 %   DROP TABLE public."agregarProvedor";
       public         heap    postgres    false            �            1259    17882    agregarProvedor_id_seq    SEQUENCE     �   CREATE SEQUENCE public."agregarProvedor_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public."agregarProvedor_id_seq";
       public          postgres    false    218            �           0    0    agregarProvedor_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public."agregarProvedor_id_seq" OWNED BY public."agregarProvedor".id;
          public          postgres    false    245            �            1259    16420    almacenSucursal    TABLE     �   CREATE TABLE public."almacenSucursal" (
    nombre character varying NOT NULL,
    tipo character varying NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date,
    id integer NOT NULL
);
 %   DROP TABLE public."almacenSucursal";
       public         heap    postgres    false            �            1259    17896    almacenSucursal_id_seq    SEQUENCE     �   CREATE SEQUENCE public."almacenSucursal_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public."almacenSucursal_id_seq";
       public          postgres    false    219            �           0    0    almacenSucursal_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public."almacenSucursal_id_seq" OWNED BY public."almacenSucursal".id;
          public          postgres    false    246            �            1259    16425 '   archivosAdjuntosListadoArchivosAdjuntos    TABLE       CREATE TABLE public."archivosAdjuntosListadoArchivosAdjuntos" (
    numero integer NOT NULL,
    archivo character varying NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date,
    id integer NOT NULL
);
 =   DROP TABLE public."archivosAdjuntosListadoArchivosAdjuntos";
       public         heap    postgres    false            �            1259    17914 .   archivosAdjuntosListadoArchivosAdjuntos_id_seq    SEQUENCE     �   CREATE SEQUENCE public."archivosAdjuntosListadoArchivosAdjuntos_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 G   DROP SEQUENCE public."archivosAdjuntosListadoArchivosAdjuntos_id_seq";
       public          postgres    false    220            �           0    0 .   archivosAdjuntosListadoArchivosAdjuntos_id_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public."archivosAdjuntosListadoArchivosAdjuntos_id_seq" OWNED BY public."archivosAdjuntosListadoArchivosAdjuntos".id;
          public          postgres    false    247            �            1259    16430    buscarProducto    TABLE       CREATE TABLE public."buscarProducto" (
    nombre character varying NOT NULL,
    precio double precision NOT NULL,
    existencia integer NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date,
    id integer NOT NULL
);
 $   DROP TABLE public."buscarProducto";
       public         heap    postgres    false            �            1259    17928    buscarProducto_id_seq    SEQUENCE     �   CREATE SEQUENCE public."buscarProducto_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."buscarProducto_id_seq";
       public          postgres    false    221            �           0    0    buscarProducto_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public."buscarProducto_id_seq" OWNED BY public."buscarProducto".id;
          public          postgres    false    248            �            1259    16435    busquedaReportes    TABLE     �  CREATE TABLE public."busquedaReportes" (
    nombre character varying NOT NULL,
    fecha date NOT NULL,
    "ventasDia" double precision NOT NULL,
    "comisionFinal" double precision NOT NULL,
    folio integer NOT NULL,
    cliente character varying NOT NULL,
    venta double precision NOT NULL,
    "%descuento" double precision NOT NULL,
    pago double precision NOT NULL,
    tipo character varying NOT NULL,
    "formaPago" character varying NOT NULL,
    "%comision" double precision NOT NULL,
    comision double precision NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date,
    id integer NOT NULL
);
 &   DROP TABLE public."busquedaReportes";
       public         heap    postgres    false            �            1259    17942    busquedaReportes_id_seq    SEQUENCE     �   CREATE SEQUENCE public."busquedaReportes_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."busquedaReportes_id_seq";
       public          postgres    false    222            �           0    0    busquedaReportes_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."busquedaReportes_id_seq" OWNED BY public."busquedaReportes".id;
          public          postgres    false    249            �            1259    16440 	   categoria    TABLE     �   CREATE TABLE public.categoria (
    nombre character varying NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date,
    id integer NOT NULL,
    sku integer
);
    DROP TABLE public.categoria;
       public         heap    postgres    false            �            1259    17956    categoria_sku_seq    SEQUENCE     �   CREATE SEQUENCE public.categoria_sku_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.categoria_sku_seq;
       public          postgres    false    223            �           0    0    categoria_sku_seq    SEQUENCE OWNED BY     F   ALTER SEQUENCE public.categoria_sku_seq OWNED BY public.categoria.id;
          public          postgres    false    250            �            1259    16445    cheque    TABLE     C  CREATE TABLE public.cheque (
    usuario character varying NOT NULL,
    fecha date NOT NULL,
    cliente character varying NOT NULL,
    cantidad integer NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date,
    id integer NOT NULL,
    ticket integer NOT NULL
);
    DROP TABLE public.cheque;
       public         heap    postgres    false            �            1259    17970    cheque_id_seq    SEQUENCE     �   CREATE SEQUENCE public.cheque_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.cheque_id_seq;
       public          postgres    false    224            �           0    0    cheque_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.cheque_id_seq OWNED BY public.cheque.id;
          public          postgres    false    251            �            1259    17977    cheque_ticket_seq    SEQUENCE     �   CREATE SEQUENCE public.cheque_ticket_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.cheque_ticket_seq;
       public          postgres    false    224            �           0    0    cheque_ticket_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.cheque_ticket_seq OWNED BY public.cheque.ticket;
          public          postgres    false    252            �            1259    16450    clientes    TABLE     #  CREATE TABLE public.clientes (
    "nombreComercial" character varying NOT NULL,
    contacto character varying NOT NULL,
    telefono integer NOT NULL,
    email character varying NOT NULL,
    vendedor character varying NOT NULL,
    giro character varying NOT NULL,
    activo bit(1) NOT NULL,
    registro character varying NOT NULL,
    actualizacion date NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date,
    id integer NOT NULL,
    direccion character varying,
    "whatsApp" integer,
    "condicionesPago" character varying,
    "listaPrecios" character varying,
    "diasCredito" integer,
    "limiteCredito" integer,
    cuenta character varying,
    "saldoPentiente" double precision,
    "creditoDisponible" double precision
);
    DROP TABLE public.clientes;
       public         heap    postgres    false            �            1259    17992    clientes_id_seq    SEQUENCE     �   CREATE SEQUENCE public.clientes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.clientes_id_seq;
       public          postgres    false    225            �           0    0    clientes_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.clientes_id_seq OWNED BY public.clientes.id;
          public          postgres    false    253            �            1259    16455    cobranzaPagosPendientesCobrar    TABLE     `  CREATE TABLE public."cobranzaPagosPendientesCobrar" (
    "fechaCobro" date NOT NULL,
    fecha date NOT NULL,
    cliente character varying NOT NULL,
    detalle character varying NOT NULL,
    extension character varying NOT NULL,
    monto double precision NOT NULL,
    saldo double precision NOT NULL,
    "metodoPago" character varying NOT NULL,
    vendedor character varying NOT NULL,
    estatus character varying NOT NULL,
    observaciones character varying NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date,
    id integer NOT NULL
);
 3   DROP TABLE public."cobranzaPagosPendientesCobrar";
       public         heap    postgres    false            �            1259    18013 $   cobranzaPagosPendientesCobrar_id_seq    SEQUENCE     �   CREATE SEQUENCE public."cobranzaPagosPendientesCobrar_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 =   DROP SEQUENCE public."cobranzaPagosPendientesCobrar_id_seq";
       public          postgres    false    226            �           0    0 $   cobranzaPagosPendientesCobrar_id_seq    SEQUENCE OWNED BY     q   ALTER SEQUENCE public."cobranzaPagosPendientesCobrar_id_seq" OWNED BY public."cobranzaPagosPendientesCobrar".id;
          public          postgres    false    254            �           1259    19594    cobranzasDia    TABLE     �  CREATE TABLE public."cobranzasDia" (
    id integer NOT NULL,
    "numeroPedido" integer NOT NULL,
    fecha date NOT NULL,
    cte integer NOT NULL,
    cliente character varying NOT NULL,
    vendedor character varying NOT NULL,
    monto double precision NOT NULL,
    saldo double precision NOT NULL,
    moneda "char" NOT NULL,
    "diasVencido" "char" NOT NULL,
    status integer NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 "   DROP TABLE public."cobranzasDia";
       public         heap    postgres    false            �           1259    19593    cobranzasDia_id_seq    SEQUENCE     �   CREATE SEQUENCE public."cobranzasDia_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."cobranzasDia_id_seq";
       public          postgres    false    506            �           0    0    cobranzasDia_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public."cobranzasDia_id_seq" OWNED BY public."cobranzasDia".id;
          public          postgres    false    505            �           1259    19464 
   comisiones    TABLE     �   CREATE TABLE public.comisiones (
    nombre character varying NOT NULL,
    porcentaje character varying NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date,
    id integer NOT NULL
);
    DROP TABLE public.comisiones;
       public         heap    postgres    false            �           1259    19463    comisiones_id_seq    SEQUENCE     �   CREATE SEQUENCE public.comisiones_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.comisiones_id_seq;
       public          postgres    false    485            �           0    0    comisiones_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.comisiones_id_seq OWNED BY public.comisiones.id;
          public          postgres    false    484            �            1259    16465    complementosPafo    TABLE     �  CREATE TABLE public."complementosPafo" (
    fecha date NOT NULL,
    cliente character varying NOT NULL,
    "formaPago" character varying NOT NULL,
    total integer NOT NULL,
    facturas character varying NOT NULL,
    pedidos character varying NOT NULL,
    comentarios character varying NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date,
    id integer NOT NULL,
    folio integer NOT NULL,
    serie integer NOT NULL
);
 &   DROP TABLE public."complementosPafo";
       public         heap    postgres    false                        1259    18048    complementosPafo_folio_seq    SEQUENCE     �   CREATE SEQUENCE public."complementosPafo_folio_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public."complementosPafo_folio_seq";
       public          postgres    false    227            �           0    0    complementosPafo_folio_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public."complementosPafo_folio_seq" OWNED BY public."complementosPafo".folio;
          public          postgres    false    256            �            1259    18041    complementosPafo_id_seq    SEQUENCE     �   CREATE SEQUENCE public."complementosPafo_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."complementosPafo_id_seq";
       public          postgres    false    227            �           0    0    complementosPafo_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."complementosPafo_id_seq" OWNED BY public."complementosPafo".id;
          public          postgres    false    255                       1259    18055    complementosPafo_serie_seq    SEQUENCE     �   CREATE SEQUENCE public."complementosPafo_serie_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public."complementosPafo_serie_seq";
       public          postgres    false    227            �           0    0    complementosPafo_serie_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public."complementosPafo_serie_seq" OWNED BY public."complementosPafo".serie;
          public          postgres    false    257            �            1259    16470    contenedores    TABLE     0  CREATE TABLE public.contenedores (
    activo bit(1) NOT NULL,
    nombre character varying NOT NULL,
    inicio double precision NOT NULL,
    fin double precision NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date,
    id integer NOT NULL
);
     DROP TABLE public.contenedores;
       public         heap    postgres    false                       1259    18104    contenedores_id_seq    SEQUENCE     �   CREATE SEQUENCE public.contenedores_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.contenedores_id_seq;
       public          postgres    false    228            �           0    0    contenedores_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.contenedores_id_seq OWNED BY public.contenedores.id;
          public          postgres    false    258            �            1259    16475    costoProductos    TABLE     �  CREATE TABLE public."costoProductos" (
    imagen bytea NOT NULL,
    "codigoEmpresa" character varying(150) NOT NULL,
    nombre character varying(150) NOT NULL,
    inventario integer NOT NULL,
    "costoMN" character varying(150) NOT NULL,
    "totalMN" character varying(150) NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date,
    id integer NOT NULL
);
 $   DROP TABLE public."costoProductos";
       public         heap    postgres    false                       1259    18119    costoProductos_id_seq    SEQUENCE     �   CREATE SEQUENCE public."costoProductos_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."costoProductos_id_seq";
       public          postgres    false    229            �           0    0    costoProductos_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public."costoProductos_id_seq" OWNED BY public."costoProductos".id;
          public          postgres    false    259            �            1259    16480    costosEnvio    TABLE     {  CREATE TABLE public."costosEnvio" (
    activo bit(1) NOT NULL,
    nombre character varying NOT NULL,
    estado character varying NOT NULL,
    global bit(1) NOT NULL,
    contenedor character varying NOT NULL,
    costo double precision NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date,
    id integer NOT NULL
);
 !   DROP TABLE public."costosEnvio";
       public         heap    postgres    false                       1259    18133    costosEnvio_id_seq    SEQUENCE     �   CREATE SEQUENCE public."costosEnvio_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public."costosEnvio_id_seq";
       public          postgres    false    230            �           0    0    costosEnvio_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public."costosEnvio_id_seq" OWNED BY public."costosEnvio".id;
          public          postgres    false    260            �           1259    19479    cotizaciones    TABLE     �  CREATE TABLE public.cotizaciones (
    folio integer NOT NULL,
    fecha date NOT NULL,
    recurrencia bit(1) NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date,
    status integer NOT NULL,
    "Comentarios" character varying,
    pedido integer NOT NULL,
    "idCliente" integer NOT NULL,
    "idVendedor" integer NOT NULL,
    neto double precision,
    descuento double precision,
    "subTotal" double precision,
    impuestos double precision,
    total double precision NOT NULL,
    envio character varying NOT NULL,
    comentarios character varying,
    CONSTRAINT check_status_range CHECK (((status >= 0) AND (status <= 9)))
);
     DROP TABLE public.cotizaciones;
       public         heap    postgres    false            �           1259    19478    cotizaciones_folio_seq    SEQUENCE     �   CREATE SEQUENCE public.cotizaciones_folio_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.cotizaciones_folio_seq;
       public          postgres    false    487            �           0    0    cotizaciones_folio_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.cotizaciones_folio_seq OWNED BY public.cotizaciones.folio;
          public          postgres    false    486            	           1259    19768    cotizaciones_pedido_seq    SEQUENCE     �   CREATE SEQUENCE public.cotizaciones_pedido_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.cotizaciones_pedido_seq;
       public          postgres    false    487            �           0    0    cotizaciones_pedido_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.cotizaciones_pedido_seq OWNED BY public.cotizaciones.pedido;
          public          postgres    false    521                       1259    19726    customerImages    TABLE        CREATE TABLE public."customerImages" (
    id integer NOT NULL,
    "idCliente" integer NOT NULL,
    imagen bytea NOT NULL
);
 $   DROP TABLE public."customerImages";
       public         heap    postgres    false                       1259    19725    customerImages_id_seq    SEQUENCE     �   CREATE SEQUENCE public."customerImages_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."customerImages_id_seq";
       public          postgres    false    514            �           0    0    customerImages_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public."customerImages_id_seq" OWNED BY public."customerImages".id;
          public          postgres    false    513            �           1259    19490    datosCliente    TABLE     �  CREATE TABLE public."datosCliente" (
    id integer NOT NULL,
    "numeroCliente" integer NOT NULL,
    telefono character varying NOT NULL,
    correo character varying NOT NULL,
    calle character varying NOT NULL,
    numero integer NOT NULL,
    colonia character varying NOT NULL,
    postal character varying NOT NULL,
    rfc character varying NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 "   DROP TABLE public."datosCliente";
       public         heap    postgres    false            �           1259    19488    datosCliente_id_seq    SEQUENCE     �   CREATE SEQUENCE public."datosCliente_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."datosCliente_id_seq";
       public          postgres    false    490            �           0    0    datosCliente_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public."datosCliente_id_seq" OWNED BY public."datosCliente".id;
          public          postgres    false    488            �           1259    19489    datosCliente_numeroCliente_seq    SEQUENCE     �   CREATE SEQUENCE public."datosCliente_numeroCliente_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 7   DROP SEQUENCE public."datosCliente_numeroCliente_seq";
       public          postgres    false    490            �           0    0    datosCliente_numeroCliente_seq    SEQUENCE OWNED BY     g   ALTER SEQUENCE public."datosCliente_numeroCliente_seq" OWNED BY public."datosCliente"."numeroCliente";
          public          postgres    false    489            �            1259    16495    datosPedido    TABLE     W  CREATE TABLE public."datosPedido" (
    "fechaCotizacion" date NOT NULL,
    "fechaPedido" date NOT NULL,
    vendedor character varying NOT NULL,
    moneda character varying NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date,
    id integer NOT NULL,
    folio integer NOT NULL
);
 !   DROP TABLE public."datosPedido";
       public         heap    postgres    false                       1259    18154    datosPedido_folio_seq    SEQUENCE     �   CREATE SEQUENCE public."datosPedido_folio_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."datosPedido_folio_seq";
       public          postgres    false    231            �           0    0    datosPedido_folio_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public."datosPedido_folio_seq" OWNED BY public."datosPedido".folio;
          public          postgres    false    262                       1259    18147    datosPedido_id_seq    SEQUENCE     �   CREATE SEQUENCE public."datosPedido_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public."datosPedido_id_seq";
       public          postgres    false    231            �           0    0    datosPedido_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public."datosPedido_id_seq" OWNED BY public."datosPedido".id;
          public          postgres    false    261                        1259    19626    datosUsuarios    TABLE     �  CREATE TABLE public."datosUsuarios" (
    id integer NOT NULL,
    direccion character varying,
    colonia character varying,
    estado character varying,
    ciudad character varying,
    "codigoPostal" integer,
    "telefonoContacto" bigint,
    "telefonoCelular" bigint,
    "isDeleted" boolean DEFAULT false,
    "isUpdated" boolean DEFAULT false,
    "dateModification" date,
    "dateCreation" date,
    "idUsuario" text,
    status character varying
);
 #   DROP TABLE public."datosUsuarios";
       public         heap    postgres    false            �           1259    19625    datosUsuarios_id_seq    SEQUENCE     �   CREATE SEQUENCE public."datosUsuarios_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public."datosUsuarios_id_seq";
       public          postgres    false    512            �           0    0    datosUsuarios_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."datosUsuarios_id_seq" OWNED BY public."datosUsuarios".id;
          public          postgres    false    511            �            1259    16500    datosVendedorClientesAsignados    TABLE     M  CREATE TABLE public."datosVendedorClientesAsignados" (
    numero integer NOT NULL,
    "nombreComercial" character varying NOT NULL,
    "ultimaVisita" date NOT NULL,
    "totalVentas" integer NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date,
    id integer NOT NULL
);
 4   DROP TABLE public."datosVendedorClientesAsignados";
       public         heap    postgres    false                       1259    18168 %   datosVendedorClientesAsignados_id_seq    SEQUENCE     �   CREATE SEQUENCE public."datosVendedorClientesAsignados_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 >   DROP SEQUENCE public."datosVendedorClientesAsignados_id_seq";
       public          postgres    false    232            �           0    0 %   datosVendedorClientesAsignados_id_seq    SEQUENCE OWNED BY     s   ALTER SEQUENCE public."datosVendedorClientesAsignados_id_seq" OWNED BY public."datosVendedorClientesAsignados".id;
          public          postgres    false    263            	           1259    18183    detallePedido    TABLE     �  CREATE TABLE public."detallePedido" (
    id integer NOT NULL,
    "datosPedido" character varying NOT NULL,
    backorder character varying NOT NULL,
    "datosEnvio" character varying NOT NULL,
    "informacionCliente" character varying NOT NULL,
    "comentariosPedido" character varying,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 #   DROP TABLE public."detallePedido";
       public         heap    postgres    false                       1259    18182    detallePedido_id_seq    SEQUENCE     �   CREATE SEQUENCE public."detallePedido_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public."detallePedido_id_seq";
       public          postgres    false    265            �           0    0    detallePedido_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."detallePedido_id_seq" OWNED BY public."detallePedido".id;
          public          postgres    false    264                       1259    18197    detallesReporteInventario    TABLE     $  CREATE TABLE public."detallesReporteInventario" (
    id integer NOT NULL,
    almacen character varying NOT NULL,
    ubicacion character varying NOT NULL,
    cantidad integer NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 /   DROP TABLE public."detallesReporteInventario";
       public         heap    postgres    false            
           1259    18196     detallesReporteInventario_id_seq    SEQUENCE     �   CREATE SEQUENCE public."detallesReporteInventario_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 9   DROP SEQUENCE public."detallesReporteInventario_id_seq";
       public          postgres    false    267            �           0    0     detallesReporteInventario_id_seq    SEQUENCE OWNED BY     i   ALTER SEQUENCE public."detallesReporteInventario_id_seq" OWNED BY public."detallesReporteInventario".id;
          public          postgres    false    266                       1259    18211    detallesVentas    TABLE     9  CREATE TABLE public."detallesVentas" (
    id integer NOT NULL,
    efectivo double precision,
    "tarjetaDebito" double precision,
    "tarjetaCredito" double precision,
    cheque double precision,
    credito double precision,
    "valesDespensa" double precision,
    transferencia double precision,
    deposito double precision,
    "saldoFavor" double precision NOT NULL,
    "notasCredito" character varying NOT NULL,
    total character varying NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 $   DROP TABLE public."detallesVentas";
       public         heap    postgres    false                       1259    18210    detallesVentas_id_seq    SEQUENCE     �   CREATE SEQUENCE public."detallesVentas_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."detallesVentas_id_seq";
       public          postgres    false    269            �           0    0    detallesVentas_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public."detallesVentas_id_seq" OWNED BY public."detallesVentas".id;
          public          postgres    false    268                       1259    18225 
   dineroCaja    TABLE     �  CREATE TABLE public."dineroCaja" (
    id integer NOT NULL,
    "fondoCaja" character varying NOT NULL,
    efectivo character varying NOT NULL,
    ventas double precision NOT NULL,
    bonos double precision NOT NULL,
    salidas double precision NOT NULL,
    devoluciones double precision NOT NULL,
    total double precision NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
     DROP TABLE public."dineroCaja";
       public         heap    postgres    false                       1259    18224    dineroCaja_id_seq    SEQUENCE     �   CREATE SEQUENCE public."dineroCaja_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."dineroCaja_id_seq";
       public          postgres    false    271            �           0    0    dineroCaja_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."dineroCaja_id_seq" OWNED BY public."dineroCaja".id;
          public          postgres    false    270                       1259    18241    entradaSalidaEfectivo    TABLE     �  CREATE TABLE public."entradaSalidaEfectivo" (
    id integer NOT NULL,
    folio integer NOT NULL,
    usuario character varying NOT NULL,
    fecha date NOT NULL,
    comentario character varying NOT NULL,
    entrada character varying NOT NULL,
    salida character varying NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 +   DROP TABLE public."entradaSalidaEfectivo";
       public         heap    postgres    false                       1259    18240    entradaSalidaEfectivo_folio_seq    SEQUENCE     �   CREATE SEQUENCE public."entradaSalidaEfectivo_folio_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 8   DROP SEQUENCE public."entradaSalidaEfectivo_folio_seq";
       public          postgres    false    274            �           0    0    entradaSalidaEfectivo_folio_seq    SEQUENCE OWNED BY     g   ALTER SEQUENCE public."entradaSalidaEfectivo_folio_seq" OWNED BY public."entradaSalidaEfectivo".folio;
          public          postgres    false    273                       1259    18239    entradaSalidaEfectivo_id_seq    SEQUENCE     �   CREATE SEQUENCE public."entradaSalidaEfectivo_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public."entradaSalidaEfectivo_id_seq";
       public          postgres    false    274            �           0    0    entradaSalidaEfectivo_id_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public."entradaSalidaEfectivo_id_seq" OWNED BY public."entradaSalidaEfectivo".id;
          public          postgres    false    272                       1259    18256    entradasCajaGeneral    TABLE     �  CREATE TABLE public."entradasCajaGeneral" (
    id integer NOT NULL,
    fecha date NOT NULL,
    hora timestamp with time zone NOT NULL,
    tipo character varying(150) NOT NULL,
    cliente character varying(150) NOT NULL,
    "metodoPago" character varying(150) NOT NULL,
    vendedor character varying(150) NOT NULL,
    monto double precision NOT NULL,
    estatus character varying(150) NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 )   DROP TABLE public."entradasCajaGeneral";
       public         heap    postgres    false                       1259    18255    entradasCajaGeneral_id_seq    SEQUENCE     �   CREATE SEQUENCE public."entradasCajaGeneral_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public."entradasCajaGeneral_id_seq";
       public          postgres    false    276            �           0    0    entradasCajaGeneral_id_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public."entradasCajaGeneral_id_seq" OWNED BY public."entradasCajaGeneral".id;
          public          postgres    false    275                       1259    18271    estadosCuenta    TABLE     �  CREATE TABLE public."estadosCuenta" (
    id integer NOT NULL,
    numero integer NOT NULL,
    cliente character varying NOT NULL,
    "razonSocial" character varying NOT NULL,
    rfc character varying NOT NULL,
    vendedor character varying NOT NULL,
    "creditoMN" double precision NOT NULL,
    "saldoMN" double precision NOT NULL,
    "disponibleMN" double precision NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 #   DROP TABLE public."estadosCuenta";
       public         heap    postgres    false                       1259    18285    estadosCuentaHistorial    TABLE     �  CREATE TABLE public."estadosCuentaHistorial" (
    id integer NOT NULL,
    numero integer NOT NULL,
    fecha date NOT NULL,
    detalle character varying NOT NULL,
    "formaPago" character varying NOT NULL,
    cargo double precision NOT NULL,
    abono double precision NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 ,   DROP TABLE public."estadosCuentaHistorial";
       public         heap    postgres    false                       1259    18284    estadosCuentaHistorial_id_seq    SEQUENCE     �   CREATE SEQUENCE public."estadosCuentaHistorial_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public."estadosCuentaHistorial_id_seq";
       public          postgres    false    280            �           0    0    estadosCuentaHistorial_id_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public."estadosCuentaHistorial_id_seq" OWNED BY public."estadosCuentaHistorial".id;
          public          postgres    false    279                       1259    18270    estadosCuenta_id_seq    SEQUENCE     �   CREATE SEQUENCE public."estadosCuenta_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public."estadosCuenta_id_seq";
       public          postgres    false    278            �           0    0    estadosCuenta_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."estadosCuenta_id_seq" OWNED BY public."estadosCuenta".id;
          public          postgres    false    277            �            1259    17774    estatus    TABLE     �   CREATE TABLE public.estatus (
    id integer NOT NULL,
    estatus character varying NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
    DROP TABLE public.estatus;
       public         heap    postgres    false                       1259    18300    facturaGlobal    TABLE     M  CREATE TABLE public."facturaGlobal" (
    id integer NOT NULL,
    folio integer NOT NULL,
    fecha date NOT NULL,
    rfc character varying NOT NULL,
    monto double precision NOT NULL,
    estatus character varying NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 #   DROP TABLE public."facturaGlobal";
       public         heap    postgres    false                       1259    18299    facturaGlobal_folio_seq    SEQUENCE     �   CREATE SEQUENCE public."facturaGlobal_folio_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."facturaGlobal_folio_seq";
       public          postgres    false    283            �           0    0    facturaGlobal_folio_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."facturaGlobal_folio_seq" OWNED BY public."facturaGlobal".folio;
          public          postgres    false    282                       1259    18298    facturaGlobal_id_seq    SEQUENCE     �   CREATE SEQUENCE public."facturaGlobal_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public."facturaGlobal_id_seq";
       public          postgres    false    283            �           0    0    facturaGlobal_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."facturaGlobal_id_seq" OWNED BY public."facturaGlobal".id;
          public          postgres    false    281                       1259    19747    fichaClienteAccesoWeb    TABLE     �   CREATE TABLE public."fichaClienteAccesoWeb" (
    id integer NOT NULL,
    "idCliente" integer NOT NULL,
    password character varying NOT NULL,
    status character varying NOT NULL,
    validacion character varying NOT NULL
);
 +   DROP TABLE public."fichaClienteAccesoWeb";
       public         heap    postgres    false                       1259    19746    fichaClienteAccesoWeb_id_seq    SEQUENCE     �   CREATE SEQUENCE public."fichaClienteAccesoWeb_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public."fichaClienteAccesoWeb_id_seq";
       public          postgres    false    518            �           0    0    fichaClienteAccesoWeb_id_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public."fichaClienteAccesoWeb_id_seq" OWNED BY public."fichaClienteAccesoWeb".id;
          public          postgres    false    517                       1259    18315    fichaClienteContactos    TABLE     G  CREATE TABLE public."fichaClienteContactos" (
    id integer NOT NULL,
    "nombreContacto" character varying NOT NULL,
    "emailContacto" character varying NOT NULL,
    "comentariosContacto" character varying NOT NULL,
    "ubicacionContacto" character varying NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date,
    "idCliente" integer NOT NULL,
    "telefonoContacto" integer NOT NULL,
    "celularContacto" integer NOT NULL,
    "whatsAppContacto" integer NOT NULL,
    "puestoContacto" character varying NOT NULL
);
 +   DROP TABLE public."fichaClienteContactos";
       public         heap    postgres    false                       1259    18314    fichaClienteContactos_id_seq    SEQUENCE     �   CREATE SEQUENCE public."fichaClienteContactos_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public."fichaClienteContactos_id_seq";
       public          postgres    false    285            �           0    0    fichaClienteContactos_id_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public."fichaClienteContactos_id_seq" OWNED BY public."fichaClienteContactos".id;
          public          postgres    false    284                       1259    18329    fichaClienteDireccionesEnvio    TABLE     �  CREATE TABLE public."fichaClienteDireccionesEnvio" (
    "nombreDireccion" character varying NOT NULL,
    colonia character varying NOT NULL,
    ciudad character varying NOT NULL,
    estado character varying NOT NULL,
    id integer NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date,
    "apellidoRecibe" character varying NOT NULL,
    "codigoPostal" integer NOT NULL,
    "idCliente" integer NOT NULL,
    "nombreRecibe" character varying NOT NULL,
    calle character varying NOT NULL,
    "numeroExterior" integer NOT NULL,
    "numeroInterior" integer NOT NULL,
    "entreCalles" character varying[] NOT NULL,
    referencias character varying NOT NULL
);
 2   DROP TABLE public."fichaClienteDireccionesEnvio";
       public         heap    postgres    false                       1259    18328 #   fichaClienteDireccionesEnvio_id_seq    SEQUENCE     �   CREATE SEQUENCE public."fichaClienteDireccionesEnvio_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 <   DROP SEQUENCE public."fichaClienteDireccionesEnvio_id_seq";
       public          postgres    false    287            �           0    0 #   fichaClienteDireccionesEnvio_id_seq    SEQUENCE OWNED BY     o   ALTER SEQUENCE public."fichaClienteDireccionesEnvio_id_seq" OWNED BY public."fichaClienteDireccionesEnvio".id;
          public          postgres    false    286            !           1259    18344    fichaClienteEstadoCuenta    TABLE     �  CREATE TABLE public."fichaClienteEstadoCuenta" (
    id integer NOT NULL,
    fecha date NOT NULL,
    tipo character varying NOT NULL,
    detalle character varying NOT NULL,
    cargo character varying NOT NULL,
    abono double precision NOT NULL,
    saldo double precision NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date,
    tc character varying,
    "idCliente" integer NOT NULL
);
 .   DROP TABLE public."fichaClienteEstadoCuenta";
       public         heap    postgres    false                        1259    18343    fichaClienteEstadoCuenta_id_seq    SEQUENCE     �   CREATE SEQUENCE public."fichaClienteEstadoCuenta_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 8   DROP SEQUENCE public."fichaClienteEstadoCuenta_id_seq";
       public          postgres    false    289            �           0    0    fichaClienteEstadoCuenta_id_seq    SEQUENCE OWNED BY     g   ALTER SEQUENCE public."fichaClienteEstadoCuenta_id_seq" OWNED BY public."fichaClienteEstadoCuenta".id;
          public          postgres    false    288                       1259    19756 &   fichaClienteFacturacionDireccionFiscal    TABLE     �  CREATE TABLE public."fichaClienteFacturacionDireccionFiscal" (
    id integer NOT NULL,
    "idCliente" integer NOT NULL,
    calle character varying NOT NULL,
    colonia character varying NOT NULL,
    estado character varying NOT NULL,
    email character varying NOT NULL,
    "numeroExterior" integer NOT NULL,
    "numeroInterior" integer NOT NULL,
    ciudad character varying NOT NULL,
    "codigoPostal" integer NOT NULL
);
 <   DROP TABLE public."fichaClienteFacturacionDireccionFiscal";
       public         heap    postgres    false                       1259    19755 -   fichaClienteFacturacionDireccionFiscal_id_seq    SEQUENCE     �   CREATE SEQUENCE public."fichaClienteFacturacionDireccionFiscal_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 F   DROP SEQUENCE public."fichaClienteFacturacionDireccionFiscal_id_seq";
       public          postgres    false    520            �           0    0 -   fichaClienteFacturacionDireccionFiscal_id_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public."fichaClienteFacturacionDireccionFiscal_id_seq" OWNED BY public."fichaClienteFacturacionDireccionFiscal".id;
          public          postgres    false    519            #           1259    18358     fichaClienteFacturacionGenerales    TABLE     �  CREATE TABLE public."fichaClienteFacturacionGenerales" (
    id integer NOT NULL,
    "metodoPago" character varying NOT NULL,
    "usoCFDI" character varying NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date,
    "idCliente" integer NOT NULL,
    rfc integer,
    "razonSocial" character varying,
    predeterminado character varying,
    capital character varying,
    "regimenFiscal" character varying,
    "formaPago" character varying
);
 6   DROP TABLE public."fichaClienteFacturacionGenerales";
       public         heap    postgres    false            "           1259    18357    fichaClienteFacturacion_id_seq    SEQUENCE     �   CREATE SEQUENCE public."fichaClienteFacturacion_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 7   DROP SEQUENCE public."fichaClienteFacturacion_id_seq";
       public          postgres    false    291            �           0    0    fichaClienteFacturacion_id_seq    SEQUENCE OWNED BY     n   ALTER SEQUENCE public."fichaClienteFacturacion_id_seq" OWNED BY public."fichaClienteFacturacionGenerales".id;
          public          postgres    false    290            %           1259    18372 )   foliosSurtidoBitacoraRecepcionesMercancia    TABLE     U  CREATE TABLE public."foliosSurtidoBitacoraRecepcionesMercancia" (
    id integer NOT NULL,
    fecha date NOT NULL,
    almacen character varying NOT NULL,
    producto character varying NOT NULL,
    cantidad double precision NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 ?   DROP TABLE public."foliosSurtidoBitacoraRecepcionesMercancia";
       public         heap    postgres    false            $           1259    18371 0   foliosSurtidoBitacoraRecepcionesMercancia_id_seq    SEQUENCE     �   CREATE SEQUENCE public."foliosSurtidoBitacoraRecepcionesMercancia_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 I   DROP SEQUENCE public."foliosSurtidoBitacoraRecepcionesMercancia_id_seq";
       public          postgres    false    293            �           0    0 0   foliosSurtidoBitacoraRecepcionesMercancia_id_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public."foliosSurtidoBitacoraRecepcionesMercancia_id_seq" OWNED BY public."foliosSurtidoBitacoraRecepcionesMercancia".id;
          public          postgres    false    292            '           1259    18386    formasPagoPedido    TABLE     �  CREATE TABLE public."formasPagoPedido" (
    id integer NOT NULL,
    fecha date NOT NULL,
    "formaPago" character varying NOT NULL,
    "cantidadPago" character varying NOT NULL,
    total double precision NOT NULL,
    "faltaPagar" double precision NOT NULL,
    "tipoCambio" double precision NOT NULL,
    tc integer NOT NULL,
    "cantidadPagada" double precision,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 &   DROP TABLE public."formasPagoPedido";
       public         heap    postgres    false            &           1259    18385    formasPagoPedido_id_seq    SEQUENCE     �   CREATE SEQUENCE public."formasPagoPedido_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."formasPagoPedido_id_seq";
       public          postgres    false    295            �           0    0    formasPagoPedido_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."formasPagoPedido_id_seq" OWNED BY public."formasPagoPedido".id;
          public          postgres    false    294            )           1259    18401 	   historial    TABLE     �  CREATE TABLE public.historial (
    id integer NOT NULL,
    tipo character varying NOT NULL,
    comentarios character varying NOT NULL,
    neto double precision NOT NULL,
    descuento double precision NOT NULL,
    "subTotal" double precision NOT NULL,
    impuestos double precision NOT NULL,
    total double precision NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
    DROP TABLE public.historial;
       public         heap    postgres    false            -           1259    18418    historialProducto    TABLE     D  CREATE TABLE public."historialProducto" (
    id integer NOT NULL,
    "codigoFabricante" integer NOT NULL,
    "codigoEmpresa" integer NOT NULL,
    estufa character varying NOT NULL,
    marca character varying NOT NULL,
    minimo integer NOT NULL,
    maximo integer NOT NULL,
    sucursal character varying NOT NULL,
    almacen character varying NOT NULL,
    entradas character varying NOT NULL,
    salidas character varying NOT NULL,
    existencia integer NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 '   DROP TABLE public."historialProducto";
       public         heap    postgres    false            0           1259    18435    historialProductoUltimasCompras    TABLE       CREATE TABLE public."historialProductoUltimasCompras" (
    id integer NOT NULL,
    "numeroOrdenCompra" integer NOT NULL,
    fecha date NOT NULL,
    cantidad integer NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 5   DROP TABLE public."historialProductoUltimasCompras";
       public         heap    postgres    false            .           1259    18433 &   historialProductoUltimasCompras_id_seq    SEQUENCE     �   CREATE SEQUENCE public."historialProductoUltimasCompras_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ?   DROP SEQUENCE public."historialProductoUltimasCompras_id_seq";
       public          postgres    false    304            �           0    0 &   historialProductoUltimasCompras_id_seq    SEQUENCE OWNED BY     u   ALTER SEQUENCE public."historialProductoUltimasCompras_id_seq" OWNED BY public."historialProductoUltimasCompras".id;
          public          postgres    false    302            /           1259    18434 5   historialProductoUltimasCompras_numeroOrdenCompra_seq    SEQUENCE     �   CREATE SEQUENCE public."historialProductoUltimasCompras_numeroOrdenCompra_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 N   DROP SEQUENCE public."historialProductoUltimasCompras_numeroOrdenCompra_seq";
       public          postgres    false    304            �           0    0 5   historialProductoUltimasCompras_numeroOrdenCompra_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public."historialProductoUltimasCompras_numeroOrdenCompra_seq" OWNED BY public."historialProductoUltimasCompras"."numeroOrdenCompra";
          public          postgres    false    303            3           1259    18449    historialProductoUltimasVentas    TABLE       CREATE TABLE public."historialProductoUltimasVentas" (
    id integer NOT NULL,
    "numeroPedido" integer NOT NULL,
    fecha date NOT NULL,
    cantidad integer NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 4   DROP TABLE public."historialProductoUltimasVentas";
       public         heap    postgres    false            1           1259    18447 %   historialProductoUltimasVentas_id_seq    SEQUENCE     �   CREATE SEQUENCE public."historialProductoUltimasVentas_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 >   DROP SEQUENCE public."historialProductoUltimasVentas_id_seq";
       public          postgres    false    307            �           0    0 %   historialProductoUltimasVentas_id_seq    SEQUENCE OWNED BY     s   ALTER SEQUENCE public."historialProductoUltimasVentas_id_seq" OWNED BY public."historialProductoUltimasVentas".id;
          public          postgres    false    305            2           1259    18448 /   historialProductoUltimasVentas_numeroPedido_seq    SEQUENCE     �   CREATE SEQUENCE public."historialProductoUltimasVentas_numeroPedido_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 H   DROP SEQUENCE public."historialProductoUltimasVentas_numeroPedido_seq";
       public          postgres    false    307            �           0    0 /   historialProductoUltimasVentas_numeroPedido_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public."historialProductoUltimasVentas_numeroPedido_seq" OWNED BY public."historialProductoUltimasVentas"."numeroPedido";
          public          postgres    false    306            ,           1259    18417 #   historialProducto_codigoEmpresa_seq    SEQUENCE     �   CREATE SEQUENCE public."historialProducto_codigoEmpresa_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 <   DROP SEQUENCE public."historialProducto_codigoEmpresa_seq";
       public          postgres    false    301            �           0    0 #   historialProducto_codigoEmpresa_seq    SEQUENCE OWNED BY     q   ALTER SEQUENCE public."historialProducto_codigoEmpresa_seq" OWNED BY public."historialProducto"."codigoEmpresa";
          public          postgres    false    300            +           1259    18416 &   historialProducto_codigoFabricante_seq    SEQUENCE     �   CREATE SEQUENCE public."historialProducto_codigoFabricante_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ?   DROP SEQUENCE public."historialProducto_codigoFabricante_seq";
       public          postgres    false    301            �           0    0 &   historialProducto_codigoFabricante_seq    SEQUENCE OWNED BY     w   ALTER SEQUENCE public."historialProducto_codigoFabricante_seq" OWNED BY public."historialProducto"."codigoFabricante";
          public          postgres    false    299            *           1259    18415    historialProducto_id_seq    SEQUENCE     �   CREATE SEQUENCE public."historialProducto_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public."historialProducto_id_seq";
       public          postgres    false    301            �           0    0    historialProducto_id_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public."historialProducto_id_seq" OWNED BY public."historialProducto".id;
          public          postgres    false    298            (           1259    18400    historial_id_seq    SEQUENCE     �   CREATE SEQUENCE public.historial_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.historial_id_seq;
       public          postgres    false    297            �           0    0    historial_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.historial_id_seq OWNED BY public.historial.id;
          public          postgres    false    296            5           1259    18462    impuestosSistema    TABLE       CREATE TABLE public."impuestosSistema" (
    id integer NOT NULL,
    nombre character varying NOT NULL,
    valor double precision NOT NULL,
    clientes integer NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 &   DROP TABLE public."impuestosSistema";
       public         heap    postgres    false            4           1259    18461    impuestosSistema_id_seq    SEQUENCE     �   CREATE SEQUENCE public."impuestosSistema_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."impuestosSistema_id_seq";
       public          postgres    false    309            �           0    0    impuestosSistema_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."impuestosSistema_id_seq" OWNED BY public."impuestosSistema".id;
          public          postgres    false    308            9           1259    18478 (   inventarioAlmacenReporteInventarioBodega    TABLE     5  CREATE TABLE public."inventarioAlmacenReporteInventarioBodega" (
    id integer NOT NULL,
    imagen bytea NOT NULL,
    "codigoFabrica" integer NOT NULL,
    "codigoEmpresa" integer NOT NULL,
    nombre character varying NOT NULL,
    marca character varying NOT NULL,
    existencia integer NOT NULL,
    ubicacion character varying NOT NULL,
    minimo integer NOT NULL,
    maximo integer NOT NULL,
    reorden integer NOT NULL,
    lotes integer NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 >   DROP TABLE public."inventarioAlmacenReporteInventarioBodega";
       public         heap    postgres    false            8           1259    18477 :   inventarioAlmacenReporteInventarioBodega_codigoEmpresa_seq    SEQUENCE     �   CREATE SEQUENCE public."inventarioAlmacenReporteInventarioBodega_codigoEmpresa_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 S   DROP SEQUENCE public."inventarioAlmacenReporteInventarioBodega_codigoEmpresa_seq";
       public          postgres    false    313            �           0    0 :   inventarioAlmacenReporteInventarioBodega_codigoEmpresa_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public."inventarioAlmacenReporteInventarioBodega_codigoEmpresa_seq" OWNED BY public."inventarioAlmacenReporteInventarioBodega"."codigoEmpresa";
          public          postgres    false    312            7           1259    18476 :   inventarioAlmacenReporteInventarioBodega_codigoFabrica_seq    SEQUENCE     �   CREATE SEQUENCE public."inventarioAlmacenReporteInventarioBodega_codigoFabrica_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 S   DROP SEQUENCE public."inventarioAlmacenReporteInventarioBodega_codigoFabrica_seq";
       public          postgres    false    313            �           0    0 :   inventarioAlmacenReporteInventarioBodega_codigoFabrica_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public."inventarioAlmacenReporteInventarioBodega_codigoFabrica_seq" OWNED BY public."inventarioAlmacenReporteInventarioBodega"."codigoFabrica";
          public          postgres    false    311            6           1259    18475 /   inventarioAlmacenReporteInventarioBodega_id_seq    SEQUENCE     �   CREATE SEQUENCE public."inventarioAlmacenReporteInventarioBodega_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 H   DROP SEQUENCE public."inventarioAlmacenReporteInventarioBodega_id_seq";
       public          postgres    false    313            �           0    0 /   inventarioAlmacenReporteInventarioBodega_id_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public."inventarioAlmacenReporteInventarioBodega_id_seq" OWNED BY public."inventarioAlmacenReporteInventarioBodega".id;
          public          postgres    false    310            ;           1259    18494    inventarioGeneralDetalles    TABLE     $  CREATE TABLE public."inventarioGeneralDetalles" (
    id integer NOT NULL,
    almacen character varying NOT NULL,
    ubicacion character varying NOT NULL,
    cantidad integer NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 /   DROP TABLE public."inventarioGeneralDetalles";
       public         heap    postgres    false            :           1259    18493     inventarioGeneralDetalles_id_seq    SEQUENCE     �   CREATE SEQUENCE public."inventarioGeneralDetalles_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 9   DROP SEQUENCE public."inventarioGeneralDetalles_id_seq";
       public          postgres    false    315            �           0    0     inventarioGeneralDetalles_id_seq    SEQUENCE OWNED BY     i   ALTER SEQUENCE public."inventarioGeneralDetalles_id_seq" OWNED BY public."inventarioGeneralDetalles".id;
          public          postgres    false    314            ?           1259    18510 "   inventarioGeneralReporteInventario    TABLE     �  CREATE TABLE public."inventarioGeneralReporteInventario" (
    id integer NOT NULL,
    imagen bytea,
    "codigoFabrica" integer NOT NULL,
    "codigoEmpresa" integer NOT NULL,
    nombre character varying NOT NULL,
    marca character varying NOT NULL,
    minimo integer NOT NULL,
    maximo integer NOT NULL,
    total integer NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 8   DROP TABLE public."inventarioGeneralReporteInventario";
       public         heap    postgres    false            >           1259    18509 4   inventarioGeneralReporteInventario_codigoEmpresa_seq    SEQUENCE     �   CREATE SEQUENCE public."inventarioGeneralReporteInventario_codigoEmpresa_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 M   DROP SEQUENCE public."inventarioGeneralReporteInventario_codigoEmpresa_seq";
       public          postgres    false    319            �           0    0 4   inventarioGeneralReporteInventario_codigoEmpresa_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public."inventarioGeneralReporteInventario_codigoEmpresa_seq" OWNED BY public."inventarioGeneralReporteInventario"."codigoEmpresa";
          public          postgres    false    318            =           1259    18508 4   inventarioGeneralReporteInventario_codigoFabrica_seq    SEQUENCE     �   CREATE SEQUENCE public."inventarioGeneralReporteInventario_codigoFabrica_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 M   DROP SEQUENCE public."inventarioGeneralReporteInventario_codigoFabrica_seq";
       public          postgres    false    319            �           0    0 4   inventarioGeneralReporteInventario_codigoFabrica_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public."inventarioGeneralReporteInventario_codigoFabrica_seq" OWNED BY public."inventarioGeneralReporteInventario"."codigoFabrica";
          public          postgres    false    317            <           1259    18507 )   inventarioGeneralReporteInventario_id_seq    SEQUENCE     �   CREATE SEQUENCE public."inventarioGeneralReporteInventario_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 B   DROP SEQUENCE public."inventarioGeneralReporteInventario_id_seq";
       public          postgres    false    319            �           0    0 )   inventarioGeneralReporteInventario_id_seq    SEQUENCE OWNED BY     {   ALTER SEQUENCE public."inventarioGeneralReporteInventario_id_seq" OWNED BY public."inventarioGeneralReporteInventario".id;
          public          postgres    false    316            B           1259    18527    inventarioGeneralTarjetaAlmacen    TABLE     	  CREATE TABLE public."inventarioGeneralTarjetaAlmacen" (
    id integer NOT NULL,
    folio integer NOT NULL,
    hora time with time zone NOT NULL,
    fecha date NOT NULL,
    pedido character varying NOT NULL,
    movimiento character varying NOT NULL,
    entrada double precision NOT NULL,
    salida double precision NOT NULL,
    inventario integer NOT NULL,
    "mostrarMovimientosCancelados" bit(1) NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 5   DROP TABLE public."inventarioGeneralTarjetaAlmacen";
       public         heap    postgres    false            A           1259    18526 )   inventarioGeneralTarjetaAlmacen_folio_seq    SEQUENCE     �   CREATE SEQUENCE public."inventarioGeneralTarjetaAlmacen_folio_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 B   DROP SEQUENCE public."inventarioGeneralTarjetaAlmacen_folio_seq";
       public          postgres    false    322            �           0    0 )   inventarioGeneralTarjetaAlmacen_folio_seq    SEQUENCE OWNED BY     {   ALTER SEQUENCE public."inventarioGeneralTarjetaAlmacen_folio_seq" OWNED BY public."inventarioGeneralTarjetaAlmacen".folio;
          public          postgres    false    321            @           1259    18525 &   inventarioGeneralTarjetaAlmacen_id_seq    SEQUENCE     �   CREATE SEQUENCE public."inventarioGeneralTarjetaAlmacen_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ?   DROP SEQUENCE public."inventarioGeneralTarjetaAlmacen_id_seq";
       public          postgres    false    322            �           0    0 &   inventarioGeneralTarjetaAlmacen_id_seq    SEQUENCE OWNED BY     u   ALTER SEQUENCE public."inventarioGeneralTarjetaAlmacen_id_seq" OWNED BY public."inventarioGeneralTarjetaAlmacen".id;
          public          postgres    false    320            F           1259    18544 #   inventarioXAlmacenReporteInventario    TABLE     A  CREATE TABLE public."inventarioXAlmacenReporteInventario" (
    id integer NOT NULL,
    imagen bytea NOT NULL,
    "codigoEmpresa" integer NOT NULL,
    "codigoFabricante" integer NOT NULL,
    nombre character varying NOT NULL,
    marca character varying NOT NULL,
    existencia integer NOT NULL,
    ubicacion character varying NOT NULL,
    minimo integer NOT NULL,
    maximo integer NOT NULL,
    reorden double precision NOT NULL,
    lotes double precision NOT NULL,
    "isUpdate" bit(1),
    "isDelete" bit(1),
    "creationDate" date,
    "creationUpdate" date
);
 9   DROP TABLE public."inventarioXAlmacenReporteInventario";
       public         heap    postgres    false            D           1259    18542 5   inventarioXAlmacenReporteInventario_codigoEmpresa_seq    SEQUENCE     �   CREATE SEQUENCE public."inventarioXAlmacenReporteInventario_codigoEmpresa_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 N   DROP SEQUENCE public."inventarioXAlmacenReporteInventario_codigoEmpresa_seq";
       public          postgres    false    326            �           0    0 5   inventarioXAlmacenReporteInventario_codigoEmpresa_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public."inventarioXAlmacenReporteInventario_codigoEmpresa_seq" OWNED BY public."inventarioXAlmacenReporteInventario"."codigoEmpresa";
          public          postgres    false    324            E           1259    18543 8   inventarioXAlmacenReporteInventario_codigoFabricante_seq    SEQUENCE     �   CREATE SEQUENCE public."inventarioXAlmacenReporteInventario_codigoFabricante_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 Q   DROP SEQUENCE public."inventarioXAlmacenReporteInventario_codigoFabricante_seq";
       public          postgres    false    326            �           0    0 8   inventarioXAlmacenReporteInventario_codigoFabricante_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public."inventarioXAlmacenReporteInventario_codigoFabricante_seq" OWNED BY public."inventarioXAlmacenReporteInventario"."codigoFabricante";
          public          postgres    false    325            C           1259    18541 *   inventarioXAlmacenReporteInventario_id_seq    SEQUENCE     �   CREATE SEQUENCE public."inventarioXAlmacenReporteInventario_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 C   DROP SEQUENCE public."inventarioXAlmacenReporteInventario_id_seq";
       public          postgres    false    326            �           0    0 *   inventarioXAlmacenReporteInventario_id_seq    SEQUENCE OWNED BY     }   ALTER SEQUENCE public."inventarioXAlmacenReporteInventario_id_seq" OWNED BY public."inventarioXAlmacenReporteInventario".id;
          public          postgres    false    323            �           1259    19434    listadoClientes    TABLE     �  CREATE TABLE public."listadoClientes" (
    id integer NOT NULL,
    "numeroCliente" integer NOT NULL,
    "numeroComercial" "char" NOT NULL,
    "razonSocial" "char" NOT NULL,
    contacto character varying NOT NULL,
    rfc character varying NOT NULL,
    telefono integer NOT NULL,
    email character varying NOT NULL,
    vendedor character varying NOT NULL,
    giro character varying NOT NULL,
    activo bit(1) NOT NULL,
    registro character varying NOT NULL,
    actualizado date,
    "isUpdate" bit(1),
    "isDelete" bit(1),
    "creationDate" date,
    "creationUpdate" date,
    "nombreComercial" character varying,
    "nombreCliente" character varying
);
 %   DROP TABLE public."listadoClientes";
       public         heap    postgres    false            �           1259    19432    listadoClientes_id_seq    SEQUENCE     �   CREATE SEQUENCE public."listadoClientes_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public."listadoClientes_id_seq";
       public          postgres    false    480            �           0    0    listadoClientes_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public."listadoClientes_id_seq" OWNED BY public."listadoClientes".id;
          public          postgres    false    478            �           1259    19433 !   listadoClientes_numeroCliente_seq    SEQUENCE     �   CREATE SEQUENCE public."listadoClientes_numeroCliente_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 :   DROP SEQUENCE public."listadoClientes_numeroCliente_seq";
       public          postgres    false    480            �           0    0 !   listadoClientes_numeroCliente_seq    SEQUENCE OWNED BY     m   ALTER SEQUENCE public."listadoClientes_numeroCliente_seq" OWNED BY public."listadoClientes"."numeroCliente";
          public          postgres    false    479            H           1259    18577    listadoComisiones    TABLE     �   CREATE TABLE public."listadoComisiones" (
    id integer NOT NULL,
    nombre character varying NOT NULL,
    porcentaje integer NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 '   DROP TABLE public."listadoComisiones";
       public         heap    postgres    false            G           1259    18576    listadoComisiones_id_seq    SEQUENCE     �   CREATE SEQUENCE public."listadoComisiones_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public."listadoComisiones_id_seq";
       public          postgres    false    328            �           0    0    listadoComisiones_id_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public."listadoComisiones_id_seq" OWNED BY public."listadoComisiones".id;
          public          postgres    false    327            L           1259    18593    listadoEntradas    TABLE     �  CREATE TABLE public."listadoEntradas" (
    id integer NOT NULL,
    folio integer NOT NULL,
    fecha date NOT NULL,
    "codigoEmpresa" integer NOT NULL,
    producto character varying NOT NULL,
    cantidad integer NOT NULL,
    "sucursalAlmacen" character varying NOT NULL,
    tipo character varying NOT NULL,
    motivo character varying NOT NULL,
    "isUpdated" bit(1) NOT NULL,
    "isDeleted" bit(1) NOT NULL,
    "DateCreation" date NOT NULL,
    "DateModification" date
);
 %   DROP TABLE public."listadoEntradas";
       public         heap    postgres    false            K           1259    18592 !   listadoEntradas_codigoEmpresa_seq    SEQUENCE     �   CREATE SEQUENCE public."listadoEntradas_codigoEmpresa_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 :   DROP SEQUENCE public."listadoEntradas_codigoEmpresa_seq";
       public          postgres    false    332            �           0    0 !   listadoEntradas_codigoEmpresa_seq    SEQUENCE OWNED BY     m   ALTER SEQUENCE public."listadoEntradas_codigoEmpresa_seq" OWNED BY public."listadoEntradas"."codigoEmpresa";
          public          postgres    false    331            J           1259    18591    listadoEntradas_folio_seq    SEQUENCE     �   CREATE SEQUENCE public."listadoEntradas_folio_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public."listadoEntradas_folio_seq";
       public          postgres    false    332            �           0    0    listadoEntradas_folio_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public."listadoEntradas_folio_seq" OWNED BY public."listadoEntradas".folio;
          public          postgres    false    330            I           1259    18590    listadoEntradas_id_seq    SEQUENCE     �   CREATE SEQUENCE public."listadoEntradas_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public."listadoEntradas_id_seq";
       public          postgres    false    332            �           0    0    listadoEntradas_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public."listadoEntradas_id_seq" OWNED BY public."listadoEntradas".id;
          public          postgres    false    329            �           1259    19617    listadoFormasPago    TABLE     ,  CREATE TABLE public."listadoFormasPago" (
    id integer NOT NULL,
    "nombreForma" character varying NOT NULL,
    "%comision" double precision NOT NULL,
    "claveSAT" integer NOT NULL,
    "isUpdated" bit(1) NOT NULL,
    "isDelated" bit(1),
    "dateModication" date,
    "dateCreation" date
);
 '   DROP TABLE public."listadoFormasPago";
       public         heap    postgres    false            �           1259    19616    listadoFormasPago_id_seq    SEQUENCE     �   CREATE SEQUENCE public."listadoFormasPago_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public."listadoFormasPago_id_seq";
       public          postgres    false    510            �           0    0    listadoFormasPago_id_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public."listadoFormasPago_id_seq" OWNED BY public."listadoFormasPago".id;
          public          postgres    false    509            �           1259    19603    listadoPrecios    TABLE     :  CREATE TABLE public."listadoPrecios" (
    id integer NOT NULL,
    fecha date NOT NULL,
    nombre character varying NOT NULL,
    variacion double precision NOT NULL,
    clientes character varying NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 $   DROP TABLE public."listadoPrecios";
       public         heap    postgres    false            �           1259    19602    listadoPrecios_id_seq    SEQUENCE     �   CREATE SEQUENCE public."listadoPrecios_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."listadoPrecios_id_seq";
       public          postgres    false    508            �           0    0    listadoPrecios_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public."listadoPrecios_id_seq" OWNED BY public."listadoPrecios".id;
          public          postgres    false    507            P           1259    18611    listadoProductos    TABLE     [  CREATE TABLE public."listadoProductos" (
    imagen bytea NOT NULL,
    id integer NOT NULL,
    "codigoFabricante" integer NOT NULL,
    "codigoEmpresa" integer NOT NULL,
    nombre character varying NOT NULL,
    marca character varying NOT NULL,
    categoria character varying NOT NULL,
    "codigoSat" integer NOT NULL,
    actualizado date NOT NULL,
    activo bit(1) NOT NULL,
    web bit(1) NOT NULL,
    pos bit(1) NOT NULL,
    venta bit(1) NOT NULL,
    precio double precision NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 &   DROP TABLE public."listadoProductos";
       public         heap    postgres    false            S           1259    18628    listadoProductosDescuento    TABLE     �  CREATE TABLE public."listadoProductosDescuento" (
    id integer NOT NULL,
    imagen bytea NOT NULL,
    "codigoEmpresa" integer NOT NULL,
    nombre character varying NOT NULL,
    desde date NOT NULL,
    hasta date NOT NULL,
    "precioBase" double precision NOT NULL,
    descuento double precision NOT NULL,
    precio double precision NOT NULL,
    activo bit(1) NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 /   DROP TABLE public."listadoProductosDescuento";
       public         heap    postgres    false            R           1259    18627 +   listadoProductosDescuento_codigoEmpresa_seq    SEQUENCE     �   CREATE SEQUENCE public."listadoProductosDescuento_codigoEmpresa_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 D   DROP SEQUENCE public."listadoProductosDescuento_codigoEmpresa_seq";
       public          postgres    false    339            �           0    0 +   listadoProductosDescuento_codigoEmpresa_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public."listadoProductosDescuento_codigoEmpresa_seq" OWNED BY public."listadoProductosDescuento"."codigoEmpresa";
          public          postgres    false    338            Q           1259    18626     listadoProductosDescuento_id_seq    SEQUENCE     �   CREATE SEQUENCE public."listadoProductosDescuento_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 9   DROP SEQUENCE public."listadoProductosDescuento_id_seq";
       public          postgres    false    339            �           0    0     listadoProductosDescuento_id_seq    SEQUENCE OWNED BY     i   ALTER SEQUENCE public."listadoProductosDescuento_id_seq" OWNED BY public."listadoProductosDescuento".id;
          public          postgres    false    337            W           1259    18645    listadoProductosMargenProductos    TABLE     ]  CREATE TABLE public."listadoProductosMargenProductos" (
    id integer NOT NULL,
    imagen bytea NOT NULL,
    "codigoFabricante" integer NOT NULL,
    "codigoEmpresa" integer NOT NULL,
    nombre "char" NOT NULL,
    activo bit(1) NOT NULL,
    "precioBaseMN" double precision NOT NULL,
    "descuentoMN" double precision NOT NULL,
    "precioMN" double precision NOT NULL,
    "costoMN" double precision NOT NULL,
    "diferenciaMN" double precision NOT NULL,
    margen double precision NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 5   DROP TABLE public."listadoProductosMargenProductos";
       public         heap    postgres    false            V           1259    18644 1   listadoProductosMargenProductos_codigoEmpresa_seq    SEQUENCE     �   CREATE SEQUENCE public."listadoProductosMargenProductos_codigoEmpresa_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 J   DROP SEQUENCE public."listadoProductosMargenProductos_codigoEmpresa_seq";
       public          postgres    false    343                        0    0 1   listadoProductosMargenProductos_codigoEmpresa_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public."listadoProductosMargenProductos_codigoEmpresa_seq" OWNED BY public."listadoProductosMargenProductos"."codigoEmpresa";
          public          postgres    false    342            U           1259    18643 4   listadoProductosMargenProductos_codigoFabricante_seq    SEQUENCE     �   CREATE SEQUENCE public."listadoProductosMargenProductos_codigoFabricante_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 M   DROP SEQUENCE public."listadoProductosMargenProductos_codigoFabricante_seq";
       public          postgres    false    343                       0    0 4   listadoProductosMargenProductos_codigoFabricante_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public."listadoProductosMargenProductos_codigoFabricante_seq" OWNED BY public."listadoProductosMargenProductos"."codigoFabricante";
          public          postgres    false    341            T           1259    18642 &   listadoProductosMargenProductos_id_seq    SEQUENCE     �   CREATE SEQUENCE public."listadoProductosMargenProductos_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ?   DROP SEQUENCE public."listadoProductosMargenProductos_id_seq";
       public          postgres    false    343                       0    0 &   listadoProductosMargenProductos_id_seq    SEQUENCE OWNED BY     u   ALTER SEQUENCE public."listadoProductosMargenProductos_id_seq" OWNED BY public."listadoProductosMargenProductos".id;
          public          postgres    false    340            O           1259    18610 "   listadoProductos_codigoEmpresa_seq    SEQUENCE     �   CREATE SEQUENCE public."listadoProductos_codigoEmpresa_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ;   DROP SEQUENCE public."listadoProductos_codigoEmpresa_seq";
       public          postgres    false    336                       0    0 "   listadoProductos_codigoEmpresa_seq    SEQUENCE OWNED BY     o   ALTER SEQUENCE public."listadoProductos_codigoEmpresa_seq" OWNED BY public."listadoProductos"."codigoEmpresa";
          public          postgres    false    335            N           1259    18609 %   listadoProductos_codigoFabricante_seq    SEQUENCE     �   CREATE SEQUENCE public."listadoProductos_codigoFabricante_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 >   DROP SEQUENCE public."listadoProductos_codigoFabricante_seq";
       public          postgres    false    336                       0    0 %   listadoProductos_codigoFabricante_seq    SEQUENCE OWNED BY     u   ALTER SEQUENCE public."listadoProductos_codigoFabricante_seq" OWNED BY public."listadoProductos"."codigoFabricante";
          public          postgres    false    334            M           1259    18608    listadoProductos_id_seq    SEQUENCE     �   CREATE SEQUENCE public."listadoProductos_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."listadoProductos_id_seq";
       public          postgres    false    336                       0    0    listadoProductos_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."listadoProductos_id_seq" OWNED BY public."listadoProductos".id;
          public          postgres    false    333            Z           1259    18662    listadoSalida    TABLE     �  CREATE TABLE public."listadoSalida" (
    id integer NOT NULL,
    folio integer NOT NULL,
    fecha date NOT NULL,
    "codigoEmpresa" "char" NOT NULL,
    producto character varying NOT NULL,
    cantidad integer NOT NULL,
    "sucursalAlmacen" character varying NOT NULL,
    tipo character varying NOT NULL,
    motivo character varying NOT NULL,
    "isUpdated" bit(1) NOT NULL,
    "isDeleted" bit(1) NOT NULL,
    "DateCreation" date NOT NULL,
    "DateModification" date
);
 #   DROP TABLE public."listadoSalida";
       public         heap    postgres    false            Y           1259    18661    listadoSalida_folio_seq    SEQUENCE     �   CREATE SEQUENCE public."listadoSalida_folio_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."listadoSalida_folio_seq";
       public          postgres    false    346                       0    0    listadoSalida_folio_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."listadoSalida_folio_seq" OWNED BY public."listadoSalida".folio;
          public          postgres    false    345            X           1259    18660    listadoSalida_id_seq    SEQUENCE     �   CREATE SEQUENCE public."listadoSalida_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public."listadoSalida_id_seq";
       public          postgres    false    346                       0    0    listadoSalida_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."listadoSalida_id_seq" OWNED BY public."listadoSalida".id;
          public          postgres    false    344            ]           1259    18678    listadoTransferencia    TABLE       CREATE TABLE public."listadoTransferencia" (
    id integer NOT NULL,
    folio integer NOT NULL,
    fecha date NOT NULL,
    usuario character varying NOT NULL,
    "deSucursal" character varying NOT NULL,
    "delAlmmacen" character varying NOT NULL,
    "aSucursal" character varying NOT NULL,
    "alAlmacen" character varying NOT NULL,
    productos integer NOT NULL,
    estatus character varying NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 *   DROP TABLE public."listadoTransferencia";
       public         heap    postgres    false            _           1259    18693 /   listadoTransferenciaMasivaDetallesTransferencia    TABLE     �  CREATE TABLE public."listadoTransferenciaMasivaDetallesTransferencia" (
    id integer NOT NULL,
    fecha date NOT NULL,
    "sucursalSurte" character varying NOT NULL,
    "sucursalRecibe" character varying NOT NULL,
    estatus character varying NOT NULL,
    "almacenSurte" character varying NOT NULL,
    "almacenRecibe" character varying NOT NULL,
    comentarios character varying,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 E   DROP TABLE public."listadoTransferenciaMasivaDetallesTransferencia";
       public         heap    postgres    false            ^           1259    18692 6   listadoTransferenciaMasivaDetallesTransferencia_id_seq    SEQUENCE     �   CREATE SEQUENCE public."listadoTransferenciaMasivaDetallesTransferencia_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 O   DROP SEQUENCE public."listadoTransferenciaMasivaDetallesTransferencia_id_seq";
       public          postgres    false    351                       0    0 6   listadoTransferenciaMasivaDetallesTransferencia_id_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public."listadoTransferenciaMasivaDetallesTransferencia_id_seq" OWNED BY public."listadoTransferenciaMasivaDetallesTransferencia".id;
          public          postgres    false    350            \           1259    18677    listadoTransferencia_folio_seq    SEQUENCE     �   CREATE SEQUENCE public."listadoTransferencia_folio_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 7   DROP SEQUENCE public."listadoTransferencia_folio_seq";
       public          postgres    false    349            	           0    0    listadoTransferencia_folio_seq    SEQUENCE OWNED BY     e   ALTER SEQUENCE public."listadoTransferencia_folio_seq" OWNED BY public."listadoTransferencia".folio;
          public          postgres    false    348            [           1259    18676    listadoTransferencia_id_seq    SEQUENCE     �   CREATE SEQUENCE public."listadoTransferencia_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public."listadoTransferencia_id_seq";
       public          postgres    false    349            
           0    0    listadoTransferencia_id_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public."listadoTransferencia_id_seq" OWNED BY public."listadoTransferencia".id;
          public          postgres    false    347            b           1259    18708 2   listadoTransferenciasMasivasProductosTransferencia    TABLE     S  CREATE TABLE public."listadoTransferenciasMasivasProductosTransferencia" (
    id integer NOT NULL,
    codigo integer NOT NULL,
    imagen bytea NOT NULL,
    nombre character varying NOT NULL,
    cantidad double precision NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 H   DROP TABLE public."listadoTransferenciasMasivasProductosTransferencia";
       public         heap    postgres    false            a           1259    18707 =   listadoTransferenciasMasivasProductosTransferencia_codigo_seq    SEQUENCE     �   CREATE SEQUENCE public."listadoTransferenciasMasivasProductosTransferencia_codigo_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 V   DROP SEQUENCE public."listadoTransferenciasMasivasProductosTransferencia_codigo_seq";
       public          postgres    false    354                       0    0 =   listadoTransferenciasMasivasProductosTransferencia_codigo_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public."listadoTransferenciasMasivasProductosTransferencia_codigo_seq" OWNED BY public."listadoTransferenciasMasivasProductosTransferencia".codigo;
          public          postgres    false    353            `           1259    18706 9   listadoTransferenciasMasivasProductosTransferencia_id_seq    SEQUENCE     �   CREATE SEQUENCE public."listadoTransferenciasMasivasProductosTransferencia_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 R   DROP SEQUENCE public."listadoTransferenciasMasivasProductosTransferencia_id_seq";
       public          postgres    false    354                       0    0 9   listadoTransferenciasMasivasProductosTransferencia_id_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public."listadoTransferenciasMasivasProductosTransferencia_id_seq" OWNED BY public."listadoTransferenciasMasivasProductosTransferencia".id;
          public          postgres    false    352            e           1259    18725 +   listadoTransferenciasMasvasArchivosAdjuntos    TABLE     
  CREATE TABLE public."listadoTransferenciasMasvasArchivosAdjuntos" (
    id integer NOT NULL,
    numero integer NOT NULL,
    archivo character varying NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 A   DROP TABLE public."listadoTransferenciasMasvasArchivosAdjuntos";
       public         heap    postgres    false            c           1259    18723 2   listadoTransferenciasMasvasArchivosAdjuntos_id_seq    SEQUENCE     �   CREATE SEQUENCE public."listadoTransferenciasMasvasArchivosAdjuntos_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 K   DROP SEQUENCE public."listadoTransferenciasMasvasArchivosAdjuntos_id_seq";
       public          postgres    false    357                       0    0 2   listadoTransferenciasMasvasArchivosAdjuntos_id_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public."listadoTransferenciasMasvasArchivosAdjuntos_id_seq" OWNED BY public."listadoTransferenciasMasvasArchivosAdjuntos".id;
          public          postgres    false    355            d           1259    18724 6   listadoTransferenciasMasvasArchivosAdjuntos_numero_seq    SEQUENCE     �   CREATE SEQUENCE public."listadoTransferenciasMasvasArchivosAdjuntos_numero_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 O   DROP SEQUENCE public."listadoTransferenciasMasvasArchivosAdjuntos_numero_seq";
       public          postgres    false    357                       0    0 6   listadoTransferenciasMasvasArchivosAdjuntos_numero_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public."listadoTransferenciasMasvasArchivosAdjuntos_numero_seq" OWNED BY public."listadoTransferenciasMasvasArchivosAdjuntos".numero;
          public          postgres    false    356            g           1259    18740    listadoVendedores    TABLE     �  CREATE TABLE public."listadoVendedores" (
    id integer NOT NULL,
    imagen bytea,
    nombre character varying NOT NULL,
    telefono integer NOT NULL,
    sucursal character varying NOT NULL,
    "fechaAlta" date NOT NULL,
    "referenciaWeb" character varying NOT NULL,
    clientes integer NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 '   DROP TABLE public."listadoVendedores";
       public         heap    postgres    false            f           1259    18739    listadoVendedores_id_seq    SEQUENCE     �   CREATE SEQUENCE public."listadoVendedores_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public."listadoVendedores_id_seq";
       public          postgres    false    359                       0    0    listadoVendedores_id_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public."listadoVendedores_id_seq" OWNED BY public."listadoVendedores".id;
          public          postgres    false    358            j           1259    18755    logistcaPedidos    TABLE       CREATE TABLE public."logistcaPedidos" (
    id integer NOT NULL,
    "folio " integer NOT NULL,
    "fechaVenta" date NOT NULL,
    cliente character varying NOT NULL,
    monto double precision NOT NULL,
    "fechaCompromiso" date NOT NULL,
    turno character varying NOT NULL,
    chofer character varying NOT NULL,
    direccion character varying NOT NULL,
    "fechaEntrega" date NOT NULL,
    estatus character varying NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 %   DROP TABLE public."logistcaPedidos";
       public         heap    postgres    false            i           1259    18754    logistcaPedidos_folio _seq    SEQUENCE     �   CREATE SEQUENCE public."logistcaPedidos_folio _seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public."logistcaPedidos_folio _seq";
       public          postgres    false    362                       0    0    logistcaPedidos_folio _seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public."logistcaPedidos_folio _seq" OWNED BY public."logistcaPedidos"."folio ";
          public          postgres    false    361            h           1259    18753    logistcaPedidos_id_seq    SEQUENCE     �   CREATE SEQUENCE public."logistcaPedidos_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public."logistcaPedidos_id_seq";
       public          postgres    false    362                       0    0    logistcaPedidos_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public."logistcaPedidos_id_seq" OWNED BY public."logistcaPedidos".id;
          public          postgres    false    360            
           1259    19811    marcasImages    TABLE     z   CREATE TABLE public."marcasImages" (
    id integer NOT NULL,
    "idMarca" bigint NOT NULL,
    imagen bytea NOT NULL
);
 "   DROP TABLE public."marcasImages";
       public         heap    postgres    false                       1259    19818    marcasProducto    TABLE       CREATE TABLE public."marcasProducto" (
    id integer NOT NULL,
    marca character varying NOT NULL,
    catalogo character varying NOT NULL,
    productos integer NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 $   DROP TABLE public."marcasProducto";
       public         heap    postgres    false            m           1259    18780 #   margenVentasReporteUtilidadesVentas    TABLE       CREATE TABLE public."margenVentasReporteUtilidadesVentas" (
    id integer NOT NULL,
    folio integer NOT NULL,
    fecha date NOT NULL,
    cliente character varying NOT NULL,
    vendedor character varying NOT NULL,
    prods double precision NOT NULL,
    "subVentaMN" double precision NOT NULL,
    "subCostoMN" double precision NOT NULL,
    "deficienteMN" double precision NOT NULL,
    margen double precision NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date NOT NULL,
    "DateModification" date
);
 9   DROP TABLE public."margenVentasReporteUtilidadesVentas";
       public         heap    postgres    false            l           1259    18779 -   margenVentasReporteUtilidadesVentas_folio_seq    SEQUENCE     �   CREATE SEQUENCE public."margenVentasReporteUtilidadesVentas_folio_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 F   DROP SEQUENCE public."margenVentasReporteUtilidadesVentas_folio_seq";
       public          postgres    false    365                       0    0 -   margenVentasReporteUtilidadesVentas_folio_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public."margenVentasReporteUtilidadesVentas_folio_seq" OWNED BY public."margenVentasReporteUtilidadesVentas".folio;
          public          postgres    false    364            k           1259    18778 *   margenVentasReporteUtilidadesVentas_id_seq    SEQUENCE     �   CREATE SEQUENCE public."margenVentasReporteUtilidadesVentas_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 C   DROP SEQUENCE public."margenVentasReporteUtilidadesVentas_id_seq";
       public          postgres    false    365                       0    0 *   margenVentasReporteUtilidadesVentas_id_seq    SEQUENCE OWNED BY     }   ALTER SEQUENCE public."margenVentasReporteUtilidadesVentas_id_seq" OWNED BY public."margenVentasReporteUtilidadesVentas".id;
          public          postgres    false    363            y           1259    18851    mercadosListadoGiros    TABLE       CREATE TABLE public."mercadosListadoGiros" (
    id integer NOT NULL,
    nombre character varying NOT NULL,
    clientes character varying NOT NULL,
    "isUpdated" bit(1) NOT NULL,
    "isDeleted" bit(1) NOT NULL,
    "DateCreation" date NOT NULL,
    "DateModification" date
);
 *   DROP TABLE public."mercadosListadoGiros";
       public         heap    postgres    false            x           1259    18850    mercadosListadoGiros_id_seq    SEQUENCE     �   CREATE SEQUENCE public."mercadosListadoGiros_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public."mercadosListadoGiros_id_seq";
       public          postgres    false    377                       0    0    mercadosListadoGiros_id_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public."mercadosListadoGiros_id_seq" OWNED BY public."mercadosListadoGiros".id;
          public          postgres    false    376            {           1259    18860    monedasSistema    TABLE     �  CREATE TABLE public."monedasSistema" (
    id integer NOT NULL,
    fecha date NOT NULL,
    hora timestamp with time zone NOT NULL,
    abreviatura character varying NOT NULL,
    contra character varying NOT NULL,
    valor double precision NOT NULL,
    "isUpdated" bit(1) NOT NULL,
    "isDeleted" bit(1) NOT NULL,
    "DateCreation" date NOT NULL,
    "DateModification" date
);
 $   DROP TABLE public."monedasSistema";
       public         heap    postgres    false            z           1259    18859    monedasSistema_id_seq    SEQUENCE     �   CREATE SEQUENCE public."monedasSistema_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."monedasSistema_id_seq";
       public          postgres    false    379                       0    0    monedasSistema_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public."monedasSistema_id_seq" OWNED BY public."monedasSistema".id;
          public          postgres    false    378            o           1259    18795    motivosEntrada    TABLE     �   CREATE TABLE public."motivosEntrada" (
    id integer NOT NULL,
    motivo character varying NOT NULL,
    clase integer NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 $   DROP TABLE public."motivosEntrada";
       public         heap    postgres    false            n           1259    18794    motivosEntrada_id_seq    SEQUENCE     �   CREATE SEQUENCE public."motivosEntrada_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."motivosEntrada_id_seq";
       public          postgres    false    367                       0    0    motivosEntrada_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public."motivosEntrada_id_seq" OWNED BY public."motivosEntrada".id;
          public          postgres    false    366            q           1259    18809    motivosSalida    TABLE     �   CREATE TABLE public."motivosSalida" (
    id integer NOT NULL,
    motivo character varying NOT NULL,
    clase integer NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 #   DROP TABLE public."motivosSalida";
       public         heap    postgres    false            p           1259    18808    motivosSalida_id_seq    SEQUENCE     �   CREATE SEQUENCE public."motivosSalida_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public."motivosSalida_id_seq";
       public          postgres    false    369                       0    0    motivosSalida_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."motivosSalida_id_seq" OWNED BY public."motivosSalida".id;
          public          postgres    false    368            u           1259    18825    notasCredito    TABLE     �  CREATE TABLE public."notasCredito" (
    id integer NOT NULL,
    serie integer NOT NULL,
    folio integer NOT NULL,
    fecha date NOT NULL,
    clientes character varying NOT NULL,
    detalles character varying NOT NULL,
    "formasPago" character varying NOT NULL,
    relacion character varying NOT NULL,
    tipo character varying NOT NULL,
    motivo character varying NOT NULL,
    subtotal double precision NOT NULL,
    impuesto double precision NOT NULL,
    iva double precision NOT NULL,
    total double precision NOT NULL,
    aplicada double precision NOT NULL,
    cancelada double precision NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 "   DROP TABLE public."notasCredito";
       public         heap    postgres    false            t           1259    18824    notasCredito_folio_seq    SEQUENCE     �   CREATE SEQUENCE public."notasCredito_folio_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public."notasCredito_folio_seq";
       public          postgres    false    373                       0    0    notasCredito_folio_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public."notasCredito_folio_seq" OWNED BY public."notasCredito".folio;
          public          postgres    false    372            r           1259    18822    notasCredito_id_seq    SEQUENCE     �   CREATE SEQUENCE public."notasCredito_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."notasCredito_id_seq";
       public          postgres    false    373                       0    0    notasCredito_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public."notasCredito_id_seq" OWNED BY public."notasCredito".id;
          public          postgres    false    370            s           1259    18823    notasCredito_serie_seq    SEQUENCE     �   CREATE SEQUENCE public."notasCredito_serie_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public."notasCredito_serie_seq";
       public          postgres    false    373                       0    0    notasCredito_serie_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public."notasCredito_serie_seq" OWNED BY public."notasCredito".serie;
          public          postgres    false    371            w           1259    18842    notificacion    TABLE     �  CREATE TABLE public.notificacion (
    id integer NOT NULL,
    comentario character varying NOT NULL,
    "aTabla" character varying NOT NULL,
    leido character varying,
    actuzalizado character varying,
    eliminado character varying,
    estatus character varying NOT NULL,
    "idEntrada" "char" NOT NULL,
    "idSalida" "char" NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
     DROP TABLE public.notificacion;
       public         heap    postgres    false            v           1259    18841    notificacion_id_seq    SEQUENCE     �   CREATE SEQUENCE public.notificacion_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.notificacion_id_seq;
       public          postgres    false    375                       0    0    notificacion_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.notificacion_id_seq OWNED BY public.notificacion.id;
          public          postgres    false    374            �           1259    19529    nuevaCotizacion    TABLE       CREATE TABLE public."nuevaCotizacion" (
    id integer NOT NULL,
    imagen bytea,
    codigo integer NOT NULL,
    nombre character varying,
    marca character varying,
    cantidad integer,
    inventario integer,
    "precioUnitario" double precision,
    descuento double precision,
    "subTotal" double precision,
    impuestos double precision,
    total double precision
);
 %   DROP TABLE public."nuevaCotizacion";
       public         heap    postgres    false            �           1259    19528    nuevaCotizacion_codigo_seq    SEQUENCE     �   CREATE SEQUENCE public."nuevaCotizacion_codigo_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public."nuevaCotizacion_codigo_seq";
       public          postgres    false    497                       0    0    nuevaCotizacion_codigo_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public."nuevaCotizacion_codigo_seq" OWNED BY public."nuevaCotizacion".codigo;
          public          postgres    false    496            �           1259    19527    nuevaCotizacion_id_seq    SEQUENCE     �   CREATE SEQUENCE public."nuevaCotizacion_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public."nuevaCotizacion_id_seq";
       public          postgres    false    497                       0    0    nuevaCotizacion_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public."nuevaCotizacion_id_seq" OWNED BY public."nuevaCotizacion".id;
          public          postgres    false    495            }           1259    18870    nuevaOrdenCompraFoliosSurtido    TABLE     S  CREATE TABLE public."nuevaOrdenCompraFoliosSurtido" (
    id integer NOT NULL,
    fecha date NOT NULL,
    almacen character varying(150) NOT NULL,
    producto character varying(150) NOT NULL,
    cantidad double precision NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 3   DROP TABLE public."nuevaOrdenCompraFoliosSurtido";
       public         heap    postgres    false            |           1259    18869 $   nuevaOrdenCompraFoliosSurtido_id_seq    SEQUENCE     �   CREATE SEQUENCE public."nuevaOrdenCompraFoliosSurtido_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 =   DROP SEQUENCE public."nuevaOrdenCompraFoliosSurtido_id_seq";
       public          postgres    false    381                       0    0 $   nuevaOrdenCompraFoliosSurtido_id_seq    SEQUENCE OWNED BY     q   ALTER SEQUENCE public."nuevaOrdenCompraFoliosSurtido_id_seq" OWNED BY public."nuevaOrdenCompraFoliosSurtido".id;
          public          postgres    false    380            �           1259    18883 #   nuevasOrdenesCompraArchivosAdjuntos    TABLE       CREATE TABLE public."nuevasOrdenesCompraArchivosAdjuntos" (
    id integer NOT NULL,
    numero integer NOT NULL,
    archivo character varying(150) NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 9   DROP TABLE public."nuevasOrdenesCompraArchivosAdjuntos";
       public         heap    postgres    false            ~           1259    18881 *   nuevasOrdenesCompraArchivosAdjuntos_id_seq    SEQUENCE     �   CREATE SEQUENCE public."nuevasOrdenesCompraArchivosAdjuntos_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 C   DROP SEQUENCE public."nuevasOrdenesCompraArchivosAdjuntos_id_seq";
       public          postgres    false    384                       0    0 *   nuevasOrdenesCompraArchivosAdjuntos_id_seq    SEQUENCE OWNED BY     }   ALTER SEQUENCE public."nuevasOrdenesCompraArchivosAdjuntos_id_seq" OWNED BY public."nuevasOrdenesCompraArchivosAdjuntos".id;
          public          postgres    false    382                       1259    18882 .   nuevasOrdenesCompraArchivosAdjuntos_numero_seq    SEQUENCE     �   CREATE SEQUENCE public."nuevasOrdenesCompraArchivosAdjuntos_numero_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 G   DROP SEQUENCE public."nuevasOrdenesCompraArchivosAdjuntos_numero_seq";
       public          postgres    false    384                        0    0 .   nuevasOrdenesCompraArchivosAdjuntos_numero_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public."nuevasOrdenesCompraArchivosAdjuntos_numero_seq" OWNED BY public."nuevasOrdenesCompraArchivosAdjuntos".numero;
          public          postgres    false    383            �           1259    18899    ordenCompraArchivosAdjuntos    TABLE       CREATE TABLE public."ordenCompraArchivosAdjuntos" (
    id integer NOT NULL,
    numero integer NOT NULL,
    archvio character varying(150) NOT NULL,
    "isUpdated" bit(1) NOT NULL,
    "isDeleted" bit(1) NOT NULL,
    "DateCreation" date NOT NULL,
    "DateModification" date
);
 1   DROP TABLE public."ordenCompraArchivosAdjuntos";
       public         heap    postgres    false            �           1259    18897 "   ordenCompraArchivosAdjuntos_id_seq    SEQUENCE     �   CREATE SEQUENCE public."ordenCompraArchivosAdjuntos_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ;   DROP SEQUENCE public."ordenCompraArchivosAdjuntos_id_seq";
       public          postgres    false    387            !           0    0 "   ordenCompraArchivosAdjuntos_id_seq    SEQUENCE OWNED BY     m   ALTER SEQUENCE public."ordenCompraArchivosAdjuntos_id_seq" OWNED BY public."ordenCompraArchivosAdjuntos".id;
          public          postgres    false    385            �           1259    18898 &   ordenCompraArchivosAdjuntos_numero_seq    SEQUENCE     �   CREATE SEQUENCE public."ordenCompraArchivosAdjuntos_numero_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ?   DROP SEQUENCE public."ordenCompraArchivosAdjuntos_numero_seq";
       public          postgres    false    387            "           0    0 &   ordenCompraArchivosAdjuntos_numero_seq    SEQUENCE OWNED BY     u   ALTER SEQUENCE public."ordenCompraArchivosAdjuntos_numero_seq" OWNED BY public."ordenCompraArchivosAdjuntos".numero;
          public          postgres    false    386            �           1259    18914    ordenCompraFoliosSurtido    TABLE     k  CREATE TABLE public."ordenCompraFoliosSurtido" (
    id integer NOT NULL,
    numero integer NOT NULL,
    fecha date NOT NULL,
    almacen character varying(150) NOT NULL,
    producto character varying(150) NOT NULL,
    cantidad double precision NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 .   DROP TABLE public."ordenCompraFoliosSurtido";
       public         heap    postgres    false            �           1259    18912    ordenCompraFoliosSurtido_id_seq    SEQUENCE     �   CREATE SEQUENCE public."ordenCompraFoliosSurtido_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 8   DROP SEQUENCE public."ordenCompraFoliosSurtido_id_seq";
       public          postgres    false    390            #           0    0    ordenCompraFoliosSurtido_id_seq    SEQUENCE OWNED BY     g   ALTER SEQUENCE public."ordenCompraFoliosSurtido_id_seq" OWNED BY public."ordenCompraFoliosSurtido".id;
          public          postgres    false    388            �           1259    18913 #   ordenCompraFoliosSurtido_numero_seq    SEQUENCE     �   CREATE SEQUENCE public."ordenCompraFoliosSurtido_numero_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 <   DROP SEQUENCE public."ordenCompraFoliosSurtido_numero_seq";
       public          postgres    false    390            $           0    0 #   ordenCompraFoliosSurtido_numero_seq    SEQUENCE OWNED BY     o   ALTER SEQUENCE public."ordenCompraFoliosSurtido_numero_seq" OWNED BY public."ordenCompraFoliosSurtido".numero;
          public          postgres    false    389            �           1259    18928    ordenesCompraListadoEntradas    TABLE     l  CREATE TABLE public."ordenesCompraListadoEntradas" (
    id integer NOT NULL,
    folio integer NOT NULL,
    "fechaRegistrada" date NOT NULL,
    "fechaCompra" date NOT NULL,
    "fechaEntrega" date NOT NULL,
    provedor character varying(150) NOT NULL,
    vendedor character varying(150) NOT NULL,
    referencia character varying(100),
    total double precision NOT NULL,
    productos integer NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date,
    status integer NOT NULL,
    CONSTRAINT check_status_range CHECK (((status >= 0) AND (status <= 6)))
);
 2   DROP TABLE public."ordenesCompraListadoEntradas";
       public         heap    postgres    false            �           1259    18926 #   ordenesCompraListadoEntradas_id_seq    SEQUENCE     �   CREATE SEQUENCE public."ordenesCompraListadoEntradas_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 <   DROP SEQUENCE public."ordenesCompraListadoEntradas_id_seq";
       public          postgres    false    393            %           0    0 #   ordenesCompraListadoEntradas_id_seq    SEQUENCE OWNED BY     o   ALTER SEQUENCE public."ordenesCompraListadoEntradas_id_seq" OWNED BY public."ordenesCompraListadoEntradas".id;
          public          postgres    false    391            �           1259    18927 '   ordenesCompraListadoEntradas_numero_seq    SEQUENCE     �   CREATE SEQUENCE public."ordenesCompraListadoEntradas_numero_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 @   DROP SEQUENCE public."ordenesCompraListadoEntradas_numero_seq";
       public          postgres    false    393            &           0    0 '   ordenesCompraListadoEntradas_numero_seq    SEQUENCE OWNED BY     v   ALTER SEQUENCE public."ordenesCompraListadoEntradas_numero_seq" OWNED BY public."ordenesCompraListadoEntradas".folio;
          public          postgres    false    392            �           1259    19546    pagos    TABLE     ,  CREATE TABLE public.pagos (
    id integer NOT NULL,
    folio integer NOT NULL,
    status integer DEFAULT 0 NOT NULL,
    status2 integer DEFAULT 0,
    fecha date,
    tipo character varying,
    cliente character varying,
    detalle character varying,
    "maneraPago" character varying,
    vendedor character varying,
    monto double precision,
    "isUpdated" integer DEFAULT 0,
    "isDeleted" integer DEFAULT 0,
    "dateCreation" date,
    "dateModification" date,
    CONSTRAINT check_status_range CHECK (((status >= 0) AND (status <= 4)))
);
    DROP TABLE public.pagos;
       public         heap    postgres    false            �           1259    19545    pagos_folio_seq    SEQUENCE     �   CREATE SEQUENCE public.pagos_folio_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.pagos_folio_seq;
       public          postgres    false    500            '           0    0    pagos_folio_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.pagos_folio_seq OWNED BY public.pagos.folio;
          public          postgres    false    499            �           1259    19544    pagos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.pagos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.pagos_id_seq;
       public          postgres    false    500            (           0    0    pagos_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.pagos_id_seq OWNED BY public.pagos.id;
          public          postgres    false    498            �            1259    17784    pedido    TABLE     �  CREATE TABLE public.pedido (
    idpedido integer NOT NULL,
    "datosPedido" character varying NOT NULL,
    "datosEnvio" character varying NOT NULL,
    "informacionCliente" character varying NOT NULL,
    "productosPedido" character varying NOT NULL,
    "formaPago" character varying NOT NULL,
    comentarios character varying NOT NULL,
    "isUpdated" bit(1) NOT NULL,
    "isDeleted" bit(1) NOT NULL,
    "DateCreation" date NOT NULL,
    "DateModification" date
);
    DROP TABLE public.pedido;
       public         heap    postgres    false            �            1259    17783    pedidoo_idpedido_seq    SEQUENCE     �   CREATE SEQUENCE public.pedidoo_idpedido_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.pedidoo_idpedido_seq;
       public          postgres    false    236            )           0    0    pedidoo_idpedido_seq    SEQUENCE OWNED BY     L   ALTER SEQUENCE public.pedidoo_idpedido_seq OWNED BY public.pedido.idpedido;
          public          postgres    false    235            �           1259    18944    pedidos    TABLE     ~  CREATE TABLE public.pedidos (
    id integer NOT NULL,
    folio integer NOT NULL,
    fecha date NOT NULL,
    cotizacion integer NOT NULL,
    "numeroCliente" integer NOT NULL,
    cliente character varying NOT NULL,
    "razonSocial" character varying NOT NULL,
    rfc character varying NOT NULL,
    monto double precision NOT NULL,
    saldo double precision NOT NULL,
    factura bit(1) NOT NULL,
    surtido bit(1) NOT NULL,
    poductos character varying NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date,
    status integer NOT NULL,
    entrega integer DEFAULT 0
);
    DROP TABLE public.pedidos;
       public         heap    postgres    false            �           1259    18955    pedidosPendientesSurtir    TABLE     �  CREATE TABLE public."pedidosPendientesSurtir" (
    id integer NOT NULL,
    folio integer NOT NULL,
    fecha date NOT NULL,
    cliente character varying NOT NULL,
    monto double precision NOT NULL,
    estatus character varying NOT NULL,
    factura bit(1) NOT NULL,
    surtido bit(1) NOT NULL,
    parcial bit(1) NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date,
    vendedor character varying
);
 -   DROP TABLE public."pedidosPendientesSurtir";
       public         heap    postgres    false            �           1259    18954 !   pedidosPendientesSurtir_folio_seq    SEQUENCE     �   CREATE SEQUENCE public."pedidosPendientesSurtir_folio_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 :   DROP SEQUENCE public."pedidosPendientesSurtir_folio_seq";
       public          postgres    false    399            *           0    0 !   pedidosPendientesSurtir_folio_seq    SEQUENCE OWNED BY     k   ALTER SEQUENCE public."pedidosPendientesSurtir_folio_seq" OWNED BY public."pedidosPendientesSurtir".folio;
          public          postgres    false    398            �           1259    18953    pedidosPendientesSurtir_id_seq    SEQUENCE     �   CREATE SEQUENCE public."pedidosPendientesSurtir_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 7   DROP SEQUENCE public."pedidosPendientesSurtir_id_seq";
       public          postgres    false    399            +           0    0    pedidosPendientesSurtir_id_seq    SEQUENCE OWNED BY     e   ALTER SEQUENCE public."pedidosPendientesSurtir_id_seq" OWNED BY public."pedidosPendientesSurtir".id;
          public          postgres    false    397            �           1259    18943    pedidos_folio_seq    SEQUENCE     �   CREATE SEQUENCE public.pedidos_folio_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.pedidos_folio_seq;
       public          postgres    false    396            ,           0    0    pedidos_folio_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.pedidos_folio_seq OWNED BY public.pedidos.folio;
          public          postgres    false    395            �           1259    18942    pedidos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.pedidos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.pedidos_id_seq;
       public          postgres    false    396            -           0    0    pedidos_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.pedidos_id_seq OWNED BY public.pedidos.id;
          public          postgres    false    394            �            1259    17806 	   productos    TABLE     f  CREATE TABLE public.productos (
    idproducto integer NOT NULL,
    imagen bytea,
    "codigoEmpresa" integer NOT NULL,
    "codigoFabricante" integer NOT NULL,
    nombre character varying(150) NOT NULL,
    marca character varying(150) NOT NULL,
    categoria character varying(150) NOT NULL,
    existencia double precision NOT NULL,
    "backOrder" double precision NOT NULL,
    cantidad integer NOT NULL,
    precio double precision NOT NULL,
    descuento double precision,
    total integer NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
    DROP TABLE public.productos;
       public         heap    postgres    false            �            1259    17804    productoos_codigoEmpresa_seq    SEQUENCE     �   CREATE SEQUENCE public."productoos_codigoEmpresa_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public."productoos_codigoEmpresa_seq";
       public          postgres    false    240            .           0    0    productoos_codigoEmpresa_seq    SEQUENCE OWNED BY     `   ALTER SEQUENCE public."productoos_codigoEmpresa_seq" OWNED BY public.productos."codigoEmpresa";
          public          postgres    false    238            �            1259    17805    productoos_codigoFabricante_seq    SEQUENCE     �   CREATE SEQUENCE public."productoos_codigoFabricante_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 8   DROP SEQUENCE public."productoos_codigoFabricante_seq";
       public          postgres    false    240            /           0    0    productoos_codigoFabricante_seq    SEQUENCE OWNED BY     f   ALTER SEQUENCE public."productoos_codigoFabricante_seq" OWNED BY public.productos."codigoFabricante";
          public          postgres    false    239            �            1259    17803    productoos_idproducto_seq    SEQUENCE     �   CREATE SEQUENCE public.productoos_idproducto_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.productoos_idproducto_seq;
       public          postgres    false    240            0           0    0    productoos_idproducto_seq    SEQUENCE OWNED BY     V   ALTER SEQUENCE public.productoos_idproducto_seq OWNED BY public.productos.idproducto;
          public          postgres    false    237            �           1259    18967    productosCotizados    TABLE       CREATE TABLE public."productosCotizados" (
    id integer NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date,
    "idProducto" integer NOT NULL,
    "idCotizacion" integer NOT NULL,
    active character varying NOT NULL
);
 (   DROP TABLE public."productosCotizados";
       public         heap    postgres    false            �           1259    18965    productosCotizados_id_seq    SEQUENCE     �   CREATE SEQUENCE public."productosCotizados_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public."productosCotizados_id_seq";
       public          postgres    false    401            1           0    0    productosCotizados_id_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public."productosCotizados_id_seq" OWNED BY public."productosCotizados".id;
          public          postgres    false    400            �           1259    18982    productosLaOrdenCompra    TABLE       CREATE TABLE public."productosLaOrdenCompra" (
    id integer NOT NULL,
    imagen bytea NOT NULL,
    codigo character varying(50) NOT NULL,
    producto character varying(150) NOT NULL,
    cantidad double precision NOT NULL,
    costo double precision NOT NULL,
    descuento double precision NOT NULL,
    total double precision NOT NULL,
    subtotal double precision NOT NULL,
    impuestos double precision NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 ,   DROP TABLE public."productosLaOrdenCompra";
       public         heap    postgres    false            �           1259    18981    productosLaOrdenCompra_id_seq    SEQUENCE     �   CREATE SEQUENCE public."productosLaOrdenCompra_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public."productosLaOrdenCompra_id_seq";
       public          postgres    false    403            2           0    0    productosLaOrdenCompra_id_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public."productosLaOrdenCompra_id_seq" OWNED BY public."productosLaOrdenCompra".id;
          public          postgres    false    402            �           1259    18996    productosPedido    TABLE     �  CREATE TABLE public."productosPedido" (
    id integer NOT NULL,
    imagen bytea NOT NULL,
    codigo character varying NOT NULL,
    nombre character varying NOT NULL,
    cantidad double precision NOT NULL,
    "unitarioMN" double precision NOT NULL,
    "descuentoMN" double precision NOT NULL,
    total double precision NOT NULL,
    devolucion integer NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 %   DROP TABLE public."productosPedido";
       public         heap    postgres    false            �           1259    18995    productosPedido_id_seq    SEQUENCE     �   CREATE SEQUENCE public."productosPedido_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public."productosPedido_id_seq";
       public          postgres    false    405            3           0    0    productosPedido_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public."productosPedido_id_seq" OWNED BY public."productosPedido".id;
          public          postgres    false    404            �           1259    19010    productosRelacionados    TABLE       CREATE TABLE public."productosRelacionados" (
    id integer NOT NULL,
    imagen bytea NOT NULL,
    codigo integer NOT NULL,
    nombre character varying NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 +   DROP TABLE public."productosRelacionados";
       public         heap    postgres    false            �           1259    19009    productosRelacionados_id_seq    SEQUENCE     �   CREATE SEQUENCE public."productosRelacionados_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public."productosRelacionados_id_seq";
       public          postgres    false    407            4           0    0    productosRelacionados_id_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public."productosRelacionados_id_seq" OWNED BY public."productosRelacionados".id;
          public          postgres    false    406            �           1259    19024    productosSurtidosPedido    TABLE     �  CREATE TABLE public."productosSurtidosPedido" (
    id integer NOT NULL,
    imagen bytea NOT NULL,
    codigo character varying NOT NULL,
    nombre character varying NOT NULL,
    cantidad character varying NOT NULL,
    fecha date NOT NULL,
    almacen character varying NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 -   DROP TABLE public."productosSurtidosPedido";
       public         heap    postgres    false            �           1259    19023    productosSurtidosPedido_id_seq    SEQUENCE     �   CREATE SEQUENCE public."productosSurtidosPedido_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 7   DROP SEQUENCE public."productosSurtidosPedido_id_seq";
       public          postgres    false    409            5           0    0    productosSurtidosPedido_id_seq    SEQUENCE OWNED BY     e   ALTER SEQUENCE public."productosSurtidosPedido_id_seq" OWNED BY public."productosSurtidosPedido".id;
          public          postgres    false    408            �           1259    19039    productosSurtirPedido    TABLE     �  CREATE TABLE public."productosSurtirPedido" (
    id integer NOT NULL,
    codigo character varying NOT NULL,
    nombre character varying NOT NULL,
    cantidad double precision NOT NULL,
    faltan integer NOT NULL,
    surtir integer NOT NULL,
    disponibles integer NOT NULL,
    series integer NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 +   DROP TABLE public."productosSurtirPedido";
       public         heap    postgres    false            �           1259    19038    productosSurtirPedido_id_seq    SEQUENCE     �   CREATE SEQUENCE public."productosSurtirPedido_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public."productosSurtirPedido_id_seq";
       public          postgres    false    411            6           0    0    productosSurtirPedido_id_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public."productosSurtirPedido_id_seq" OWNED BY public."productosSurtirPedido".id;
          public          postgres    false    410            �           1259    19053    productosTransferencia    TABLE     7  CREATE TABLE public."productosTransferencia" (
    id integer NOT NULL,
    codigo integer NOT NULL,
    imagen bytea NOT NULL,
    nombre character varying NOT NULL,
    cantidad double precision NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 ,   DROP TABLE public."productosTransferencia";
       public         heap    postgres    false            �           1259    19052    productosTransferencia_id_seq    SEQUENCE     �   CREATE SEQUENCE public."productosTransferencia_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public."productosTransferencia_id_seq";
       public          postgres    false    413            7           0    0    productosTransferencia_id_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public."productosTransferencia_id_seq" OWNED BY public."productosTransferencia".id;
          public          postgres    false    412            �           1259    19067 
   provedores    TABLE     �  CREATE TABLE public.provedores (
    id integer NOT NULL,
    nombre character varying(150) NOT NULL,
    "razonSocial" character varying(150) NOT NULL,
    rfc character varying(150) NOT NULL,
    ciudad character varying(150) NOT NULL,
    estado character varying(150) NOT NULL,
    pais character varying(150) NOT NULL,
    productos double precision NOT NULL,
    "isUpdated" bit(1) NOT NULL,
    "isDeleted" bit(1) NOT NULL,
    "DateCreation" date NOT NULL,
    "DateModification" date
);
    DROP TABLE public.provedores;
       public         heap    postgres    false            �           1259    19081    provedoresProducto    TABLE     )  CREATE TABLE public."provedoresProducto" (
    id integer NOT NULL,
    "nombreProvedor" character varying NOT NULL,
    "unidadesCompradas" integer NOT NULL,
    "ultimaCompra" date NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 (   DROP TABLE public."provedoresProducto";
       public         heap    postgres    false            �           1259    19080    provedoresProducto_id_seq    SEQUENCE     �   CREATE SEQUENCE public."provedoresProducto_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public."provedoresProducto_id_seq";
       public          postgres    false    417            8           0    0    provedoresProducto_id_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public."provedoresProducto_id_seq" OWNED BY public."provedoresProducto".id;
          public          postgres    false    416            �           1259    19066    provedores_id_seq    SEQUENCE     �   CREATE SEQUENCE public.provedores_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.provedores_id_seq;
       public          postgres    false    415            9           0    0    provedores_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.provedores_id_seq OWNED BY public.provedores.id;
          public          postgres    false    414            �           1259    19097    recordPorProducto    TABLE       CREATE TABLE public."recordPorProducto" (
    id integer NOT NULL,
    fecha date NOT NULL,
    "idProducto" integer NOT NULL,
    clave integer NOT NULL,
    producto character varying NOT NULL,
    provedor character varying NOT NULL,
    cantidad integer NOT NULL,
    monto double precision NOT NULL,
    "tipoCambio" double precision NOT NULL,
    total double precision NOT NULL,
    "0C" integer NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 '   DROP TABLE public."recordPorProducto";
       public         heap    postgres    false            �           1259    19096     recordPorProducto_idProducto_seq    SEQUENCE     �   CREATE SEQUENCE public."recordPorProducto_idProducto_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 9   DROP SEQUENCE public."recordPorProducto_idProducto_seq";
       public          postgres    false    420            :           0    0     recordPorProducto_idProducto_seq    SEQUENCE OWNED BY     k   ALTER SEQUENCE public."recordPorProducto_idProducto_seq" OWNED BY public."recordPorProducto"."idProducto";
          public          postgres    false    419            �           1259    19095    recordPorProducto_id_seq    SEQUENCE     �   CREATE SEQUENCE public."recordPorProducto_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public."recordPorProducto_id_seq";
       public          postgres    false    420            ;           0    0    recordPorProducto_id_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public."recordPorProducto_id_seq" OWNED BY public."recordPorProducto".id;
          public          postgres    false    418            �           1259    19113    recordProducto    TABLE       CREATE TABLE public."recordProducto" (
    id integer NOT NULL,
    fecha date NOT NULL,
    pedido integer NOT NULL,
    "idProducto" integer NOT NULL,
    clave character varying NOT NULL,
    producto character varying NOT NULL,
    cliente character varying NOT NULL,
    vendedor character varying NOT NULL,
    cantidad double precision NOT NULL,
    monto double precision NOT NULL,
    total double precision NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 $   DROP TABLE public."recordProducto";
       public         heap    postgres    false            �           1259    19112    recordProducto_idProducto_seq    SEQUENCE     �   CREATE SEQUENCE public."recordProducto_idProducto_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public."recordProducto_idProducto_seq";
       public          postgres    false    423            <           0    0    recordProducto_idProducto_seq    SEQUENCE OWNED BY     e   ALTER SEQUENCE public."recordProducto_idProducto_seq" OWNED BY public."recordProducto"."idProducto";
          public          postgres    false    422            �           1259    19111    recordProducto_id_seq    SEQUENCE     �   CREATE SEQUENCE public."recordProducto_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."recordProducto_id_seq";
       public          postgres    false    423            =           0    0    recordProducto_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public."recordProducto_id_seq" OWNED BY public."recordProducto".id;
          public          postgres    false    421            �           1259    19573    refreshTokens    TABLE     Z   CREATE TABLE public."refreshTokens" (
    id integer NOT NULL,
    "refreshToken" text
);
 #   DROP TABLE public."refreshTokens";
       public         heap    postgres    false            �           1259    19578    refreshTokens_id_seq    SEQUENCE     �   CREATE SEQUENCE public."refreshTokens_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public."refreshTokens_id_seq";
       public          postgres    false    503            >           0    0    refreshTokens_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."refreshTokens_id_seq" OWNED BY public."refreshTokens".id;
          public          postgres    false    504            �           1259    19128    reporteCobranza    TABLE     �  CREATE TABLE public."reporteCobranza" (
    id integer NOT NULL,
    pedido integer NOT NULL,
    cliente character varying NOT NULL,
    vendedor character varying NOT NULL,
    "formaPago" character varying NOT NULL,
    monto double precision NOT NULL,
    moneda character varying NOT NULL,
    comp double precision NOT NULL,
    total double precision NOT NULL,
    pagado double precision NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 %   DROP TABLE public."reporteCobranza";
       public         heap    postgres    false            �           1259    19127    reporteCobranza_id_seq    SEQUENCE     �   CREATE SEQUENCE public."reporteCobranza_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public."reporteCobranza_id_seq";
       public          postgres    false    425            ?           0    0    reporteCobranza_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public."reporteCobranza_id_seq" OWNED BY public."reporteCobranza".id;
          public          postgres    false    424            �           1259    19143    reporteComisiones    TABLE     �  CREATE TABLE public."reporteComisiones" (
    id integer NOT NULL,
    fecha date NOT NULL,
    folio integer NOT NULL,
    cliente character varying NOT NULL,
    vendedor character varying NOT NULL,
    importe double precision NOT NULL,
    tc double precision NOT NULL,
    moneda character varying NOT NULL,
    comision double precision NOT NULL,
    "%comision" double precision NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 '   DROP TABLE public."reporteComisiones";
       public         heap    postgres    false            �           1259    19142    reporteComisiones_folio_seq    SEQUENCE     �   CREATE SEQUENCE public."reporteComisiones_folio_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public."reporteComisiones_folio_seq";
       public          postgres    false    428            @           0    0    reporteComisiones_folio_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public."reporteComisiones_folio_seq" OWNED BY public."reporteComisiones".folio;
          public          postgres    false    427            �           1259    19141    reporteComisiones_id_seq    SEQUENCE     �   CREATE SEQUENCE public."reporteComisiones_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public."reporteComisiones_id_seq";
       public          postgres    false    428            A           0    0    reporteComisiones_id_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public."reporteComisiones_id_seq" OWNED BY public."reporteComisiones".id;
          public          postgres    false    426            �           1259    19159    reporteFacturas    TABLE     \  CREATE TABLE public."reporteFacturas" (
    id integer NOT NULL,
    folio integer NOT NULL,
    pedido character varying NOT NULL,
    fecha date NOT NULL,
    cliente character varying NOT NULL,
    vendedor character varying NOT NULL,
    "formaPago" character varying NOT NULL,
    subtotal integer NOT NULL,
    iva integer NOT NULL,
    total integer NOT NULL,
    moneda character varying NOT NULL,
    informacion character varying NOT NULL,
    nc integer NOT NULL,
    cp integer NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 %   DROP TABLE public."reporteFacturas";
       public         heap    postgres    false            �           1259    19158    reporteFacturas_folio_seq    SEQUENCE     �   CREATE SEQUENCE public."reporteFacturas_folio_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public."reporteFacturas_folio_seq";
       public          postgres    false    431            B           0    0    reporteFacturas_folio_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public."reporteFacturas_folio_seq" OWNED BY public."reporteFacturas".folio;
          public          postgres    false    430            �           1259    19157    reporteFacturas_id_seq    SEQUENCE     �   CREATE SEQUENCE public."reporteFacturas_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public."reporteFacturas_id_seq";
       public          postgres    false    431            C           0    0    reporteFacturas_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public."reporteFacturas_id_seq" OWNED BY public."reporteFacturas".id;
          public          postgres    false    429            �           1259    19171    reporteInventario    TABLE     �  CREATE TABLE public."reporteInventario" (
    id integer NOT NULL,
    imagen bytea NOT NULL,
    "codigoFabrica" integer NOT NULL,
    "codigoEmpresa" integer NOT NULL,
    nombre character varying NOT NULL,
    marca character varying NOT NULL,
    minimo integer NOT NULL,
    maximo integer NOT NULL,
    total double precision NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 '   DROP TABLE public."reporteInventario";
       public         heap    postgres    false            �           1259    19170 #   reporteInventario_codigoEmpresa_seq    SEQUENCE     �   CREATE SEQUENCE public."reporteInventario_codigoEmpresa_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 <   DROP SEQUENCE public."reporteInventario_codigoEmpresa_seq";
       public          postgres    false    435            D           0    0 #   reporteInventario_codigoEmpresa_seq    SEQUENCE OWNED BY     q   ALTER SEQUENCE public."reporteInventario_codigoEmpresa_seq" OWNED BY public."reporteInventario"."codigoEmpresa";
          public          postgres    false    434            �           1259    19169 #   reporteInventario_codigoFabrica_seq    SEQUENCE     �   CREATE SEQUENCE public."reporteInventario_codigoFabrica_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 <   DROP SEQUENCE public."reporteInventario_codigoFabrica_seq";
       public          postgres    false    435            E           0    0 #   reporteInventario_codigoFabrica_seq    SEQUENCE OWNED BY     q   ALTER SEQUENCE public."reporteInventario_codigoFabrica_seq" OWNED BY public."reporteInventario"."codigoFabrica";
          public          postgres    false    433            �           1259    19168    reporteInventario_id_seq    SEQUENCE     �   CREATE SEQUENCE public."reporteInventario_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public."reporteInventario_id_seq";
       public          postgres    false    435            F           0    0    reporteInventario_id_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public."reporteInventario_id_seq" OWNED BY public."reporteInventario".id;
          public          postgres    false    432            �           1259    19445    reporteVentas    TABLE       CREATE TABLE public."reporteVentas" (
    id integer NOT NULL,
    fecha date NOT NULL,
    folio integer NOT NULL,
    cliente character varying NOT NULL,
    sucursal character varying NOT NULL,
    vendedor character varying NOT NULL,
    monto double precision NOT NULL,
    "totalPesos" double precision NOT NULL,
    "totalDolares" double precision NOT NULL,
    "acumuladoPesos" double precision NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 #   DROP TABLE public."reporteVentas";
       public         heap    postgres    false            �           1259    19187    reporteVentasClienfe    TABLE     �  CREATE TABLE public."reporteVentasClienfe" (
    id integer NOT NULL,
    cliente character varying NOT NULL,
    "numeroVenta" integer NOT NULL,
    fecha date NOT NULL,
    vendedor character varying NOT NULL,
    monto double precision NOT NULL,
    total double precision NOT NULL,
    "numeroCliente" "char" NOT NULL,
    "tipoCambio" double precision NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 *   DROP TABLE public."reporteVentasClienfe";
       public         heap    postgres    false            �           1259    19186    reporteVentasClienfe_id_seq    SEQUENCE     �   CREATE SEQUENCE public."reporteVentasClienfe_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public."reporteVentasClienfe_id_seq";
       public          postgres    false    437            G           0    0    reporteVentasClienfe_id_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public."reporteVentasClienfe_id_seq" OWNED BY public."reporteVentasClienfe".id;
          public          postgres    false    436            �           1259    19444    reporteVentas_folio_seq    SEQUENCE     �   CREATE SEQUENCE public."reporteVentas_folio_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."reporteVentas_folio_seq";
       public          postgres    false    483            H           0    0    reporteVentas_folio_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."reporteVentas_folio_seq" OWNED BY public."reporteVentas".folio;
          public          postgres    false    482            �           1259    19443    reporteVentas_id_seq    SEQUENCE     �   CREATE SEQUENCE public."reporteVentas_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public."reporteVentas_id_seq";
       public          postgres    false    483            I           0    0    reporteVentas_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."reporteVentas_id_seq" OWNED BY public."reporteVentas".id;
          public          postgres    false    481            �            1259    17773    status_id_seq    SEQUENCE     �   CREATE SEQUENCE public.status_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.status_id_seq;
       public          postgres    false    234            J           0    0    status_id_seq    SEQUENCE OWNED BY     @   ALTER SEQUENCE public.status_id_seq OWNED BY public.estatus.id;
          public          postgres    false    233            �           1259    19202 #   sucursalesAlmacenesListadoProductos    TABLE     �  CREATE TABLE public."sucursalesAlmacenesListadoProductos" (
    id integer NOT NULL,
    nombre character varying NOT NULL,
    ciudad character varying NOT NULL,
    estado character varying NOT NULL,
    telefono character varying NOT NULL,
    gerente character varying NOT NULL,
    almacenes integer NOT NULL,
    web bit(1) NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 9   DROP TABLE public."sucursalesAlmacenesListadoProductos";
       public         heap    postgres    false            �           1259    19201 *   sucursalesAlmacenesListadoProductos_id_seq    SEQUENCE     �   CREATE SEQUENCE public."sucursalesAlmacenesListadoProductos_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 C   DROP SEQUENCE public."sucursalesAlmacenesListadoProductos_id_seq";
       public          postgres    false    439            K           0    0 *   sucursalesAlmacenesListadoProductos_id_seq    SEQUENCE OWNED BY     }   ALTER SEQUENCE public."sucursalesAlmacenesListadoProductos_id_seq" OWNED BY public."sucursalesAlmacenesListadoProductos".id;
          public          postgres    false    438                       1259    19825    sucursalesDatos    TABLE     �  CREATE TABLE public."sucursalesDatos" (
    "nombreCorto" character varying NOT NULL,
    direccion character varying NOT NULL,
    colonia character varying NOT NULL,
    "codigoPostal" integer NOT NULL,
    "emailSucursal" character varying NOT NULL,
    rfc character varying NOT NULL,
    "geoUrlMaps" character varying NOT NULL,
    "limiteCredito" integer NOT NULL,
    "encabezadoPos" character varying NOT NULL,
    "notaEnviosPos" character varying NOT NULL,
    "notaTicketPos" character varying NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date,
    id integer NOT NULL
);
 %   DROP TABLE public."sucursalesDatos";
       public         heap    postgres    false                       1259    19830    sucursalesDatos_id_seq    SEQUENCE     �   CREATE SEQUENCE public."sucursalesDatos_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public."sucursalesDatos_id_seq";
       public          postgres    false    524            L           0    0    sucursalesDatos_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public."sucursalesDatos_id_seq" OWNED BY public."sucursalesDatos".id;
          public          postgres    false    525            �           1259    19216    surtir    TABLE     �  CREATE TABLE public.surtir (
    id integer NOT NULL,
    "datosCliente" character varying NOT NULL,
    "surtirDesdeAlmacen" character varying NOT NULL,
    "comentariosPedido" character varying NOT NULL,
    "productosSurtir" character varying NOT NULL,
    "productosSurtidos" character varying NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
    DROP TABLE public.surtir;
       public         heap    postgres    false            �           1259    19215    surtir_id_seq    SEQUENCE     �   CREATE SEQUENCE public.surtir_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.surtir_id_seq;
       public          postgres    false    441            M           0    0    surtir_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.surtir_id_seq OWNED BY public.surtir.id;
          public          postgres    false    440            �           1259    19231    tarjetaCredito    TABLE     M  CREATE TABLE public."tarjetaCredito" (
    id integer NOT NULL,
    ticket integer NOT NULL,
    usuario character varying NOT NULL,
    fecha date NOT NULL,
    cliente character varying NOT NULL,
    cantidad integer NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 $   DROP TABLE public."tarjetaCredito";
       public         heap    postgres    false            �           1259    19229    tarjetaCredito_id_seq    SEQUENCE     �   CREATE SEQUENCE public."tarjetaCredito_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."tarjetaCredito_id_seq";
       public          postgres    false    444            N           0    0    tarjetaCredito_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public."tarjetaCredito_id_seq" OWNED BY public."tarjetaCredito".id;
          public          postgres    false    442            �           1259    19230    tarjetaCredito_ticket_seq    SEQUENCE     �   CREATE SEQUENCE public."tarjetaCredito_ticket_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public."tarjetaCredito_ticket_seq";
       public          postgres    false    444            O           0    0    tarjetaCredito_ticket_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public."tarjetaCredito_ticket_seq" OWNED BY public."tarjetaCredito".ticket;
          public          postgres    false    443            �           1259    19247    tarjetaDebito    TABLE     L  CREATE TABLE public."tarjetaDebito" (
    id integer NOT NULL,
    ticket integer NOT NULL,
    usuario character varying NOT NULL,
    fecha date NOT NULL,
    cliente character varying NOT NULL,
    cantidad integer NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 #   DROP TABLE public."tarjetaDebito";
       public         heap    postgres    false            �           1259    19245    tarjetaDebito_id_seq    SEQUENCE     �   CREATE SEQUENCE public."tarjetaDebito_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public."tarjetaDebito_id_seq";
       public          postgres    false    447            P           0    0    tarjetaDebito_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."tarjetaDebito_id_seq" OWNED BY public."tarjetaDebito".id;
          public          postgres    false    445            �           1259    19246    tarjetaDebito_ticket_seq    SEQUENCE     �   CREATE SEQUENCE public."tarjetaDebito_ticket_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public."tarjetaDebito_ticket_seq";
       public          postgres    false    447            Q           0    0    tarjetaDebito_ticket_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public."tarjetaDebito_ticket_seq" OWNED BY public."tarjetaDebito".ticket;
          public          postgres    false    446            �           1259    19274    ticket    TABLE     �  CREATE TABLE public.ticket (
    id integer NOT NULL,
    ticket integer NOT NULL,
    imagen bytea NOT NULL,
    codigo "char" NOT NULL,
    nombre character varying NOT NULL,
    cantidad integer NOT NULL,
    precio double precision NOT NULL,
    descuento double precision NOT NULL,
    total double precision NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
    DROP TABLE public.ticket;
       public         heap    postgres    false            �           1259    19272    ticket_id_seq    SEQUENCE     �   CREATE SEQUENCE public.ticket_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.ticket_id_seq;
       public          postgres    false    453            R           0    0    ticket_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.ticket_id_seq OWNED BY public.ticket.id;
          public          postgres    false    451            �           1259    19273    ticket_ticket_seq    SEQUENCE     �   CREATE SEQUENCE public.ticket_ticket_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.ticket_ticket_seq;
       public          postgres    false    453            S           0    0    ticket_ticket_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.ticket_ticket_seq OWNED BY public.ticket.ticket;
          public          postgres    false    452            �           1259    19263    tickets    TABLE     �  CREATE TABLE public.tickets (
    id integer NOT NULL,
    cliente character varying NOT NULL,
    rfc character varying NOT NULL,
    "codigoPostal" character varying NOT NULL,
    productos character varying NOT NULL,
    vendedor character varying NOT NULL,
    imagen bytea NOT NULL,
    total double precision NOT NULL,
    ticket integer NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
    DROP TABLE public.tickets;
       public         heap    postgres    false            �           1259    19261    tickets_id_seq    SEQUENCE     �   CREATE SEQUENCE public.tickets_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.tickets_id_seq;
       public          postgres    false    450            T           0    0    tickets_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.tickets_id_seq OWNED BY public.tickets.id;
          public          postgres    false    448            �           1259    19262    tickets_ticket_seq    SEQUENCE     �   CREATE SEQUENCE public.tickets_ticket_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.tickets_ticket_seq;
       public          postgres    false    450            U           0    0    tickets_ticket_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.tickets_ticket_seq OWNED BY public.tickets.ticket;
          public          postgres    false    449            �           1259    19295    tiposEnvioGastosEnvio    TABLE     K  CREATE TABLE public."tiposEnvioGastosEnvio" (
    id integer NOT NULL,
    activo bit(1) NOT NULL,
    costo1 bit(1) NOT NULL,
    costo2 bit(1) NOT NULL,
    costo3 bit(1) NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date,
    "tipoEnvio" character varying NOT NULL
);
 +   DROP TABLE public."tiposEnvioGastosEnvio";
       public         heap    postgres    false            �           1259    19294    tiposEnvioGastosEnvio_id_seq    SEQUENCE     �   CREATE SEQUENCE public."tiposEnvioGastosEnvio_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public."tiposEnvioGastosEnvio_id_seq";
       public          postgres    false    455            V           0    0    tiposEnvioGastosEnvio_id_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public."tiposEnvioGastosEnvio_id_seq" OWNED BY public."tiposEnvioGastosEnvio".id;
          public          postgres    false    454            �           1259    19308    transferenciaIndividualArchivos    TABLE     �   CREATE TABLE public."transferenciaIndividualArchivos" (
    id integer NOT NULL,
    numero integer NOT NULL,
    archivo character varying NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 5   DROP TABLE public."transferenciaIndividualArchivos";
       public         heap    postgres    false            �           1259    19306 %   transferenciIndividualArchivos_id_seq    SEQUENCE     �   CREATE SEQUENCE public."transferenciIndividualArchivos_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 >   DROP SEQUENCE public."transferenciIndividualArchivos_id_seq";
       public          postgres    false    458            W           0    0 %   transferenciIndividualArchivos_id_seq    SEQUENCE OWNED BY     t   ALTER SEQUENCE public."transferenciIndividualArchivos_id_seq" OWNED BY public."transferenciaIndividualArchivos".id;
          public          postgres    false    456            �           1259    19307 )   transferenciIndividualArchivos_numero_seq    SEQUENCE     �   CREATE SEQUENCE public."transferenciIndividualArchivos_numero_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 B   DROP SEQUENCE public."transferenciIndividualArchivos_numero_seq";
       public          postgres    false    458            X           0    0 )   transferenciIndividualArchivos_numero_seq    SEQUENCE OWNED BY     |   ALTER SEQUENCE public."transferenciIndividualArchivos_numero_seq" OWNED BY public."transferenciaIndividualArchivos".numero;
          public          postgres    false    457            �           1259    19325 '   transferenciaAlmacenesListadoIndividual    TABLE       CREATE TABLE public."transferenciaAlmacenesListadoIndividual" (
    id integer NOT NULL,
    folio integer NOT NULL,
    fecha date NOT NULL,
    "codigoEmpresa" integer NOT NULL,
    nombre character varying NOT NULL,
    cantidad integer NOT NULL,
    "deSucursal" character varying NOT NULL,
    "delAlmacen" character varying NOT NULL,
    "aSucursal" character varying NOT NULL,
    "alAlmacen" character varying NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 =   DROP TABLE public."transferenciaAlmacenesListadoIndividual";
       public         heap    postgres    false            �           1259    19324 9   transferenciaAlmacenesListadoIndividual_codigoEmpresa_seq    SEQUENCE     �   CREATE SEQUENCE public."transferenciaAlmacenesListadoIndividual_codigoEmpresa_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 R   DROP SEQUENCE public."transferenciaAlmacenesListadoIndividual_codigoEmpresa_seq";
       public          postgres    false    462            Y           0    0 9   transferenciaAlmacenesListadoIndividual_codigoEmpresa_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public."transferenciaAlmacenesListadoIndividual_codigoEmpresa_seq" OWNED BY public."transferenciaAlmacenesListadoIndividual"."codigoEmpresa";
          public          postgres    false    461            �           1259    19323 1   transferenciaAlmacenesListadoIndividual_folio_seq    SEQUENCE     �   CREATE SEQUENCE public."transferenciaAlmacenesListadoIndividual_folio_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 J   DROP SEQUENCE public."transferenciaAlmacenesListadoIndividual_folio_seq";
       public          postgres    false    462            Z           0    0 1   transferenciaAlmacenesListadoIndividual_folio_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public."transferenciaAlmacenesListadoIndividual_folio_seq" OWNED BY public."transferenciaAlmacenesListadoIndividual".folio;
          public          postgres    false    460            �           1259    19322 .   transferenciaAlmacenesListadoIndividual_id_seq    SEQUENCE     �   CREATE SEQUENCE public."transferenciaAlmacenesListadoIndividual_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 G   DROP SEQUENCE public."transferenciaAlmacenesListadoIndividual_id_seq";
       public          postgres    false    462            [           0    0 .   transferenciaAlmacenesListadoIndividual_id_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public."transferenciaAlmacenesListadoIndividual_id_seq" OWNED BY public."transferenciaAlmacenesListadoIndividual".id;
          public          postgres    false    459            �           1259    19341    transferenciaIndividualDetalles    TABLE     �  CREATE TABLE public."transferenciaIndividualDetalles" (
    id integer NOT NULL,
    fecha date NOT NULL,
    "sucursalSurte" character varying NOT NULL,
    "sucursalRecibe" character varying NOT NULL,
    "almacenSurte" character varying NOT NULL,
    "almacenRecibe" character varying NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 5   DROP TABLE public."transferenciaIndividualDetalles";
       public         heap    postgres    false            �           1259    19340 &   transferenciaIndividualDetalles_id_seq    SEQUENCE     �   CREATE SEQUENCE public."transferenciaIndividualDetalles_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ?   DROP SEQUENCE public."transferenciaIndividualDetalles_id_seq";
       public          postgres    false    464            \           0    0 &   transferenciaIndividualDetalles_id_seq    SEQUENCE OWNED BY     u   ALTER SEQUENCE public."transferenciaIndividualDetalles_id_seq" OWNED BY public."transferenciaIndividualDetalles".id;
          public          postgres    false    463            �           1259    19356    ubicacionTarjetaAlmacen    TABLE     �  CREATE TABLE public."ubicacionTarjetaAlmacen" (
    id integer NOT NULL,
    folio integer NOT NULL,
    fecha date NOT NULL,
    pedido character varying NOT NULL,
    "0C" character varying NOT NULL,
    movimiento character varying NOT NULL,
    entrada double precision NOT NULL,
    salida double precision NOT NULL,
    inventario integer NOT NULL,
    "mostrarMovimientosCancelados" bit(1) NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 -   DROP TABLE public."ubicacionTarjetaAlmacen";
       public         heap    postgres    false            �           1259    19355     uicacionTarjetaAlmacen_folio_seq    SEQUENCE     �   CREATE SEQUENCE public."uicacionTarjetaAlmacen_folio_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 9   DROP SEQUENCE public."uicacionTarjetaAlmacen_folio_seq";
       public          postgres    false    467            ]           0    0     uicacionTarjetaAlmacen_folio_seq    SEQUENCE OWNED BY     j   ALTER SEQUENCE public."uicacionTarjetaAlmacen_folio_seq" OWNED BY public."ubicacionTarjetaAlmacen".folio;
          public          postgres    false    466            �           1259    19354    uicacionTarjetaAlmacen_id_seq    SEQUENCE     �   CREATE SEQUENCE public."uicacionTarjetaAlmacen_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public."uicacionTarjetaAlmacen_id_seq";
       public          postgres    false    467            ^           0    0    uicacionTarjetaAlmacen_id_seq    SEQUENCE OWNED BY     d   ALTER SEQUENCE public."uicacionTarjetaAlmacen_id_seq" OWNED BY public."ubicacionTarjetaAlmacen".id;
          public          postgres    false    465            �           1259    19561    usuarios    TABLE     �  CREATE TABLE public.usuarios (
    id integer NOT NULL,
    nombre text NOT NULL,
    apellido text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "perfilSeguridad" integer,
    "vendedorId" integer,
    "isDeleted" boolean DEFAULT false,
    "isUpdated" boolean DEFAULT false,
    "creationDate" date,
    "updatedDate" date,
    "isActive" boolean DEFAULT true,
    "accessToken" text,
    imagen bytea,
    grupo character varying,
    vendedor character varying
);
    DROP TABLE public.usuarios;
       public         heap    postgres    false            �           1259    19569    usuarios_id_seq    SEQUENCE     �   CREATE SEQUENCE public.usuarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.usuarios_id_seq;
       public          postgres    false    501            _           0    0    usuarios_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.usuarios_id_seq OWNED BY public.usuarios.id;
          public          postgres    false    502            �           1259    19372 
   vendedores    TABLE       CREATE TABLE public.vendedores (
    id integer NOT NULL,
    nombre character varying NOT NULL,
    telefono integer NOT NULL,
    sucursal character varying NOT NULL,
    "fechaAlta" date NOT NULL,
    "referenciaWeb" character varying NOT NULL,
    clientes integer NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
    DROP TABLE public.vendedores;
       public         heap    postgres    false                       1259    19735    vendedoresImages    TABLE     �   CREATE TABLE public."vendedoresImages" (
    id integer NOT NULL,
    "idVendedor" integer NOT NULL,
    imagen bytea NOT NULL
);
 &   DROP TABLE public."vendedoresImages";
       public         heap    postgres    false                       1259    19734    vendedoresImages_id_seq    SEQUENCE     �   CREATE SEQUENCE public."vendedoresImages_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."vendedoresImages_id_seq";
       public          postgres    false    516            `           0    0    vendedoresImages_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."vendedoresImages_id_seq" OWNED BY public."vendedoresImages".id;
          public          postgres    false    515            �           1259    19371    vendedores_id_seq    SEQUENCE     �   CREATE SEQUENCE public.vendedores_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.vendedores_id_seq;
       public          postgres    false    469            a           0    0    vendedores_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.vendedores_id_seq OWNED BY public.vendedores.id;
          public          postgres    false    468            �           1259    19387    ventasEfectivo    TABLE     V  CREATE TABLE public."ventasEfectivo" (
    id integer NOT NULL,
    ticket integer NOT NULL,
    usuario character varying NOT NULL,
    fecha date NOT NULL,
    cliente character varying NOT NULL,
    importe character varying NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 $   DROP TABLE public."ventasEfectivo";
       public         heap    postgres    false            �           1259    19385    ventasEfectivo_id_seq    SEQUENCE     �   CREATE SEQUENCE public."ventasEfectivo_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."ventasEfectivo_id_seq";
       public          postgres    false    472            b           0    0    ventasEfectivo_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public."ventasEfectivo_id_seq" OWNED BY public."ventasEfectivo".id;
          public          postgres    false    470            �           1259    19386    ventasEfectivo_ticket_seq    SEQUENCE     �   CREATE SEQUENCE public."ventasEfectivo_ticket_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public."ventasEfectivo_ticket_seq";
       public          postgres    false    472            c           0    0    ventasEfectivo_ticket_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public."ventasEfectivo_ticket_seq" OWNED BY public."ventasEfectivo".ticket;
          public          postgres    false    471            �           1259    19403    ventasRealizadas    TABLE     �  CREATE TABLE public."ventasRealizadas" (
    id integer NOT NULL,
    ticket integer NOT NULL,
    "fechaHora" date NOT NULL,
    cliente character varying NOT NULL,
    estatus character varying NOT NULL,
    factura character varying NOT NULL,
    monto double precision NOT NULL,
    "isUpdated" bit(1),
    "isDeleted" bit(1),
    "DateCreation" date,
    "DateModification" date
);
 &   DROP TABLE public."ventasRealizadas";
       public         heap    postgres    false            �           1259    19401    ventasRealizadas_id_seq    SEQUENCE     �   CREATE SEQUENCE public."ventasRealizadas_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."ventasRealizadas_id_seq";
       public          postgres    false    475            d           0    0    ventasRealizadas_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."ventasRealizadas_id_seq" OWNED BY public."ventasRealizadas".id;
          public          postgres    false    473            �           1259    19402    ventasRealizadas_ticket_seq    SEQUENCE     �   CREATE SEQUENCE public."ventasRealizadas_ticket_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public."ventasRealizadas_ticket_seq";
       public          postgres    false    475            e           0    0    ventasRealizadas_ticket_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public."ventasRealizadas_ticket_seq" OWNED BY public."ventasRealizadas".ticket;
          public          postgres    false    474            �           1259    19418 	   verPedido    TABLE     /  CREATE TABLE public."verPedido" (
    id integer NOT NULL,
    "datosPedido" character varying NOT NULL,
    "datosEnvio" character varying NOT NULL,
    "informacionCliente" character varying NOT NULL,
    "isUpdate" bit(1),
    "isDelete" bit(1),
    "creationDate" date,
    "creationUpdate" date
);
    DROP TABLE public."verPedido";
       public         heap    postgres    false            �           1259    19417    verPedido_id_seq    SEQUENCE     �   CREATE SEQUENCE public."verPedido_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."verPedido_id_seq";
       public          postgres    false    477            f           0    0    verPedido_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."verPedido_id_seq" OWNED BY public."verPedido".id;
          public          postgres    false    476                       2604    17824    abonoAplicadoEfectivo id    DEFAULT     �   ALTER TABLE ONLY public."abonoAplicadoEfectivo" ALTER COLUMN id SET DEFAULT nextval('public."abonoAplicadoEfectivo_id_seq"'::regclass);
 I   ALTER TABLE public."abonoAplicadoEfectivo" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    241    214                       2604    17845    abonosAplicados id    DEFAULT     |   ALTER TABLE ONLY public."abonosAplicados" ALTER COLUMN id SET DEFAULT nextval('public."abonosAplicados_id_seq"'::regclass);
 C   ALTER TABLE public."abonosAplicados" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    242    215                       2604    17857    abonosCancelados id    DEFAULT     ~   ALTER TABLE ONLY public."abonosCancelados" ALTER COLUMN id SET DEFAULT nextval('public."abonosCancelados_id_seq"'::regclass);
 D   ALTER TABLE public."abonosCancelados" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    243    216            �           2604    19515    agregarProductoCotizacion id    DEFAULT     �   ALTER TABLE ONLY public."agregarProductoCotizacion" ALTER COLUMN id SET DEFAULT nextval('public."agregarProductoCotizacion_id_seq"'::regclass);
 M   ALTER TABLE public."agregarProductoCotizacion" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    494    491    494            �           2604    19516 (   agregarProductoCotizacion codigoEmpresaa    DEFAULT     �   ALTER TABLE ONLY public."agregarProductoCotizacion" ALTER COLUMN "codigoEmpresaa" SET DEFAULT nextval('public."agregarProductoCotizacion_codigoEmpresaa_seq"'::regclass);
 [   ALTER TABLE public."agregarProductoCotizacion" ALTER COLUMN "codigoEmpresaa" DROP DEFAULT;
       public          postgres    false    492    494    494            �           2604    19517 *   agregarProductoCotizacion codigoFabricante    DEFAULT     �   ALTER TABLE ONLY public."agregarProductoCotizacion" ALTER COLUMN "codigoFabricante" SET DEFAULT nextval('public."agregarProductoCotizacion_codigoFabricante_seq"'::regclass);
 ]   ALTER TABLE public."agregarProductoCotizacion" ALTER COLUMN "codigoFabricante" DROP DEFAULT;
       public          postgres    false    493    494    494                       2604    17869    agregarProductoRelacionado id    DEFAULT     �   ALTER TABLE ONLY public."agregarProductoRelacionado" ALTER COLUMN id SET DEFAULT nextval('public."agregarProductoRelacionado_id_seq"'::regclass);
 N   ALTER TABLE public."agregarProductoRelacionado" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    244    217                       2604    17883    agregarProvedor id    DEFAULT     |   ALTER TABLE ONLY public."agregarProvedor" ALTER COLUMN id SET DEFAULT nextval('public."agregarProvedor_id_seq"'::regclass);
 C   ALTER TABLE public."agregarProvedor" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    245    218                       2604    17897    almacenSucursal id    DEFAULT     |   ALTER TABLE ONLY public."almacenSucursal" ALTER COLUMN id SET DEFAULT nextval('public."almacenSucursal_id_seq"'::regclass);
 C   ALTER TABLE public."almacenSucursal" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    246    219                       2604    17915 *   archivosAdjuntosListadoArchivosAdjuntos id    DEFAULT     �   ALTER TABLE ONLY public."archivosAdjuntosListadoArchivosAdjuntos" ALTER COLUMN id SET DEFAULT nextval('public."archivosAdjuntosListadoArchivosAdjuntos_id_seq"'::regclass);
 [   ALTER TABLE public."archivosAdjuntosListadoArchivosAdjuntos" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    247    220                       2604    17929    buscarProducto id    DEFAULT     z   ALTER TABLE ONLY public."buscarProducto" ALTER COLUMN id SET DEFAULT nextval('public."buscarProducto_id_seq"'::regclass);
 B   ALTER TABLE public."buscarProducto" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    248    221                       2604    17943    busquedaReportes id    DEFAULT     ~   ALTER TABLE ONLY public."busquedaReportes" ALTER COLUMN id SET DEFAULT nextval('public."busquedaReportes_id_seq"'::regclass);
 D   ALTER TABLE public."busquedaReportes" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    249    222                       2604    17957    categoria id    DEFAULT     m   ALTER TABLE ONLY public.categoria ALTER COLUMN id SET DEFAULT nextval('public.categoria_sku_seq'::regclass);
 ;   ALTER TABLE public.categoria ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    250    223                       2604    17971 	   cheque id    DEFAULT     f   ALTER TABLE ONLY public.cheque ALTER COLUMN id SET DEFAULT nextval('public.cheque_id_seq'::regclass);
 8   ALTER TABLE public.cheque ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    251    224                       2604    17978    cheque ticket    DEFAULT     n   ALTER TABLE ONLY public.cheque ALTER COLUMN ticket SET DEFAULT nextval('public.cheque_ticket_seq'::regclass);
 <   ALTER TABLE public.cheque ALTER COLUMN ticket DROP DEFAULT;
       public          postgres    false    252    224                       2604    17993    clientes id    DEFAULT     j   ALTER TABLE ONLY public.clientes ALTER COLUMN id SET DEFAULT nextval('public.clientes_id_seq'::regclass);
 :   ALTER TABLE public.clientes ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    253    225                       2604    18014     cobranzaPagosPendientesCobrar id    DEFAULT     �   ALTER TABLE ONLY public."cobranzaPagosPendientesCobrar" ALTER COLUMN id SET DEFAULT nextval('public."cobranzaPagosPendientesCobrar_id_seq"'::regclass);
 Q   ALTER TABLE public."cobranzaPagosPendientesCobrar" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    254    226            �           2604    19597    cobranzasDia id    DEFAULT     v   ALTER TABLE ONLY public."cobranzasDia" ALTER COLUMN id SET DEFAULT nextval('public."cobranzasDia_id_seq"'::regclass);
 @   ALTER TABLE public."cobranzasDia" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    505    506    506            �           2604    19467    comisiones id    DEFAULT     n   ALTER TABLE ONLY public.comisiones ALTER COLUMN id SET DEFAULT nextval('public.comisiones_id_seq'::regclass);
 <   ALTER TABLE public.comisiones ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    485    484    485                       2604    18042    complementosPafo id    DEFAULT     ~   ALTER TABLE ONLY public."complementosPafo" ALTER COLUMN id SET DEFAULT nextval('public."complementosPafo_id_seq"'::regclass);
 D   ALTER TABLE public."complementosPafo" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    255    227                       2604    18049    complementosPafo folio    DEFAULT     �   ALTER TABLE ONLY public."complementosPafo" ALTER COLUMN folio SET DEFAULT nextval('public."complementosPafo_folio_seq"'::regclass);
 G   ALTER TABLE public."complementosPafo" ALTER COLUMN folio DROP DEFAULT;
       public          postgres    false    256    227                       2604    18056    complementosPafo serie    DEFAULT     �   ALTER TABLE ONLY public."complementosPafo" ALTER COLUMN serie SET DEFAULT nextval('public."complementosPafo_serie_seq"'::regclass);
 G   ALTER TABLE public."complementosPafo" ALTER COLUMN serie DROP DEFAULT;
       public          postgres    false    257    227                        2604    18105    contenedores id    DEFAULT     r   ALTER TABLE ONLY public.contenedores ALTER COLUMN id SET DEFAULT nextval('public.contenedores_id_seq'::regclass);
 >   ALTER TABLE public.contenedores ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    258    228            !           2604    18120    costoProductos id    DEFAULT     z   ALTER TABLE ONLY public."costoProductos" ALTER COLUMN id SET DEFAULT nextval('public."costoProductos_id_seq"'::regclass);
 B   ALTER TABLE public."costoProductos" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    259    229            "           2604    18134    costosEnvio id    DEFAULT     t   ALTER TABLE ONLY public."costosEnvio" ALTER COLUMN id SET DEFAULT nextval('public."costosEnvio_id_seq"'::regclass);
 ?   ALTER TABLE public."costosEnvio" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    260    230            �           2604    19483    cotizaciones folio    DEFAULT     x   ALTER TABLE ONLY public.cotizaciones ALTER COLUMN folio SET DEFAULT nextval('public.cotizaciones_folio_seq'::regclass);
 A   ALTER TABLE public.cotizaciones ALTER COLUMN folio DROP DEFAULT;
       public          postgres    false    487    486    487            �           2604    19769    cotizaciones pedido    DEFAULT     z   ALTER TABLE ONLY public.cotizaciones ALTER COLUMN pedido SET DEFAULT nextval('public.cotizaciones_pedido_seq'::regclass);
 B   ALTER TABLE public.cotizaciones ALTER COLUMN pedido DROP DEFAULT;
       public          postgres    false    521    487            �           2604    19729    customerImages id    DEFAULT     z   ALTER TABLE ONLY public."customerImages" ALTER COLUMN id SET DEFAULT nextval('public."customerImages_id_seq"'::regclass);
 B   ALTER TABLE public."customerImages" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    514    513    514            �           2604    19493    datosCliente id    DEFAULT     v   ALTER TABLE ONLY public."datosCliente" ALTER COLUMN id SET DEFAULT nextval('public."datosCliente_id_seq"'::regclass);
 @   ALTER TABLE public."datosCliente" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    488    490    490            �           2604    19494    datosCliente numeroCliente    DEFAULT     �   ALTER TABLE ONLY public."datosCliente" ALTER COLUMN "numeroCliente" SET DEFAULT nextval('public."datosCliente_numeroCliente_seq"'::regclass);
 M   ALTER TABLE public."datosCliente" ALTER COLUMN "numeroCliente" DROP DEFAULT;
       public          postgres    false    489    490    490            #           2604    18148    datosPedido id    DEFAULT     t   ALTER TABLE ONLY public."datosPedido" ALTER COLUMN id SET DEFAULT nextval('public."datosPedido_id_seq"'::regclass);
 ?   ALTER TABLE public."datosPedido" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    261    231            $           2604    18155    datosPedido folio    DEFAULT     z   ALTER TABLE ONLY public."datosPedido" ALTER COLUMN folio SET DEFAULT nextval('public."datosPedido_folio_seq"'::regclass);
 B   ALTER TABLE public."datosPedido" ALTER COLUMN folio DROP DEFAULT;
       public          postgres    false    262    231            �           2604    19629    datosUsuarios id    DEFAULT     x   ALTER TABLE ONLY public."datosUsuarios" ALTER COLUMN id SET DEFAULT nextval('public."datosUsuarios_id_seq"'::regclass);
 A   ALTER TABLE public."datosUsuarios" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    511    512    512            %           2604    18169 !   datosVendedorClientesAsignados id    DEFAULT     �   ALTER TABLE ONLY public."datosVendedorClientesAsignados" ALTER COLUMN id SET DEFAULT nextval('public."datosVendedorClientesAsignados_id_seq"'::regclass);
 R   ALTER TABLE public."datosVendedorClientesAsignados" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    263    232            +           2604    18186    detallePedido id    DEFAULT     x   ALTER TABLE ONLY public."detallePedido" ALTER COLUMN id SET DEFAULT nextval('public."detallePedido_id_seq"'::regclass);
 A   ALTER TABLE public."detallePedido" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    264    265    265            ,           2604    18200    detallesReporteInventario id    DEFAULT     �   ALTER TABLE ONLY public."detallesReporteInventario" ALTER COLUMN id SET DEFAULT nextval('public."detallesReporteInventario_id_seq"'::regclass);
 M   ALTER TABLE public."detallesReporteInventario" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    266    267    267            -           2604    18214    detallesVentas id    DEFAULT     z   ALTER TABLE ONLY public."detallesVentas" ALTER COLUMN id SET DEFAULT nextval('public."detallesVentas_id_seq"'::regclass);
 B   ALTER TABLE public."detallesVentas" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    268    269    269            .           2604    18228    dineroCaja id    DEFAULT     r   ALTER TABLE ONLY public."dineroCaja" ALTER COLUMN id SET DEFAULT nextval('public."dineroCaja_id_seq"'::regclass);
 >   ALTER TABLE public."dineroCaja" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    270    271    271            /           2604    18244    entradaSalidaEfectivo id    DEFAULT     �   ALTER TABLE ONLY public."entradaSalidaEfectivo" ALTER COLUMN id SET DEFAULT nextval('public."entradaSalidaEfectivo_id_seq"'::regclass);
 I   ALTER TABLE public."entradaSalidaEfectivo" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    272    274    274            0           2604    18245    entradaSalidaEfectivo folio    DEFAULT     �   ALTER TABLE ONLY public."entradaSalidaEfectivo" ALTER COLUMN folio SET DEFAULT nextval('public."entradaSalidaEfectivo_folio_seq"'::regclass);
 L   ALTER TABLE public."entradaSalidaEfectivo" ALTER COLUMN folio DROP DEFAULT;
       public          postgres    false    273    274    274            1           2604    18259    entradasCajaGeneral id    DEFAULT     �   ALTER TABLE ONLY public."entradasCajaGeneral" ALTER COLUMN id SET DEFAULT nextval('public."entradasCajaGeneral_id_seq"'::regclass);
 G   ALTER TABLE public."entradasCajaGeneral" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    275    276    276            2           2604    18274    estadosCuenta id    DEFAULT     x   ALTER TABLE ONLY public."estadosCuenta" ALTER COLUMN id SET DEFAULT nextval('public."estadosCuenta_id_seq"'::regclass);
 A   ALTER TABLE public."estadosCuenta" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    278    277    278            3           2604    18288    estadosCuentaHistorial id    DEFAULT     �   ALTER TABLE ONLY public."estadosCuentaHistorial" ALTER COLUMN id SET DEFAULT nextval('public."estadosCuentaHistorial_id_seq"'::regclass);
 J   ALTER TABLE public."estadosCuentaHistorial" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    279    280    280            &           2604    17777 
   estatus id    DEFAULT     g   ALTER TABLE ONLY public.estatus ALTER COLUMN id SET DEFAULT nextval('public.status_id_seq'::regclass);
 9   ALTER TABLE public.estatus ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    234    233    234            4           2604    18303    facturaGlobal id    DEFAULT     x   ALTER TABLE ONLY public."facturaGlobal" ALTER COLUMN id SET DEFAULT nextval('public."facturaGlobal_id_seq"'::regclass);
 A   ALTER TABLE public."facturaGlobal" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    281    283    283            5           2604    18304    facturaGlobal folio    DEFAULT     ~   ALTER TABLE ONLY public."facturaGlobal" ALTER COLUMN folio SET DEFAULT nextval('public."facturaGlobal_folio_seq"'::regclass);
 D   ALTER TABLE public."facturaGlobal" ALTER COLUMN folio DROP DEFAULT;
       public          postgres    false    282    283    283            �           2604    19750    fichaClienteAccesoWeb id    DEFAULT     �   ALTER TABLE ONLY public."fichaClienteAccesoWeb" ALTER COLUMN id SET DEFAULT nextval('public."fichaClienteAccesoWeb_id_seq"'::regclass);
 I   ALTER TABLE public."fichaClienteAccesoWeb" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    517    518    518            6           2604    18318    fichaClienteContactos id    DEFAULT     �   ALTER TABLE ONLY public."fichaClienteContactos" ALTER COLUMN id SET DEFAULT nextval('public."fichaClienteContactos_id_seq"'::regclass);
 I   ALTER TABLE public."fichaClienteContactos" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    284    285    285            7           2604    18332    fichaClienteDireccionesEnvio id    DEFAULT     �   ALTER TABLE ONLY public."fichaClienteDireccionesEnvio" ALTER COLUMN id SET DEFAULT nextval('public."fichaClienteDireccionesEnvio_id_seq"'::regclass);
 P   ALTER TABLE public."fichaClienteDireccionesEnvio" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    286    287    287            8           2604    18347    fichaClienteEstadoCuenta id    DEFAULT     �   ALTER TABLE ONLY public."fichaClienteEstadoCuenta" ALTER COLUMN id SET DEFAULT nextval('public."fichaClienteEstadoCuenta_id_seq"'::regclass);
 L   ALTER TABLE public."fichaClienteEstadoCuenta" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    288    289    289            �           2604    19759 )   fichaClienteFacturacionDireccionFiscal id    DEFAULT     �   ALTER TABLE ONLY public."fichaClienteFacturacionDireccionFiscal" ALTER COLUMN id SET DEFAULT nextval('public."fichaClienteFacturacionDireccionFiscal_id_seq"'::regclass);
 Z   ALTER TABLE public."fichaClienteFacturacionDireccionFiscal" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    520    519    520            9           2604    18361 #   fichaClienteFacturacionGenerales id    DEFAULT     �   ALTER TABLE ONLY public."fichaClienteFacturacionGenerales" ALTER COLUMN id SET DEFAULT nextval('public."fichaClienteFacturacion_id_seq"'::regclass);
 T   ALTER TABLE public."fichaClienteFacturacionGenerales" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    291    290    291            :           2604    18375 ,   foliosSurtidoBitacoraRecepcionesMercancia id    DEFAULT     �   ALTER TABLE ONLY public."foliosSurtidoBitacoraRecepcionesMercancia" ALTER COLUMN id SET DEFAULT nextval('public."foliosSurtidoBitacoraRecepcionesMercancia_id_seq"'::regclass);
 ]   ALTER TABLE public."foliosSurtidoBitacoraRecepcionesMercancia" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    293    292    293            ;           2604    18389    formasPagoPedido id    DEFAULT     ~   ALTER TABLE ONLY public."formasPagoPedido" ALTER COLUMN id SET DEFAULT nextval('public."formasPagoPedido_id_seq"'::regclass);
 D   ALTER TABLE public."formasPagoPedido" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    294    295    295            <           2604    18404    historial id    DEFAULT     l   ALTER TABLE ONLY public.historial ALTER COLUMN id SET DEFAULT nextval('public.historial_id_seq'::regclass);
 ;   ALTER TABLE public.historial ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    296    297    297            =           2604    18421    historialProducto id    DEFAULT     �   ALTER TABLE ONLY public."historialProducto" ALTER COLUMN id SET DEFAULT nextval('public."historialProducto_id_seq"'::regclass);
 E   ALTER TABLE public."historialProducto" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    301    298    301            >           2604    18422 "   historialProducto codigoFabricante    DEFAULT     �   ALTER TABLE ONLY public."historialProducto" ALTER COLUMN "codigoFabricante" SET DEFAULT nextval('public."historialProducto_codigoFabricante_seq"'::regclass);
 U   ALTER TABLE public."historialProducto" ALTER COLUMN "codigoFabricante" DROP DEFAULT;
       public          postgres    false    301    299    301            ?           2604    18423    historialProducto codigoEmpresa    DEFAULT     �   ALTER TABLE ONLY public."historialProducto" ALTER COLUMN "codigoEmpresa" SET DEFAULT nextval('public."historialProducto_codigoEmpresa_seq"'::regclass);
 R   ALTER TABLE public."historialProducto" ALTER COLUMN "codigoEmpresa" DROP DEFAULT;
       public          postgres    false    301    300    301            @           2604    18438 "   historialProductoUltimasCompras id    DEFAULT     �   ALTER TABLE ONLY public."historialProductoUltimasCompras" ALTER COLUMN id SET DEFAULT nextval('public."historialProductoUltimasCompras_id_seq"'::regclass);
 S   ALTER TABLE public."historialProductoUltimasCompras" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    304    302    304            A           2604    18439 1   historialProductoUltimasCompras numeroOrdenCompra    DEFAULT     �   ALTER TABLE ONLY public."historialProductoUltimasCompras" ALTER COLUMN "numeroOrdenCompra" SET DEFAULT nextval('public."historialProductoUltimasCompras_numeroOrdenCompra_seq"'::regclass);
 d   ALTER TABLE public."historialProductoUltimasCompras" ALTER COLUMN "numeroOrdenCompra" DROP DEFAULT;
       public          postgres    false    304    303    304            B           2604    18452 !   historialProductoUltimasVentas id    DEFAULT     �   ALTER TABLE ONLY public."historialProductoUltimasVentas" ALTER COLUMN id SET DEFAULT nextval('public."historialProductoUltimasVentas_id_seq"'::regclass);
 R   ALTER TABLE public."historialProductoUltimasVentas" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    305    307    307            C           2604    18453 +   historialProductoUltimasVentas numeroPedido    DEFAULT     �   ALTER TABLE ONLY public."historialProductoUltimasVentas" ALTER COLUMN "numeroPedido" SET DEFAULT nextval('public."historialProductoUltimasVentas_numeroPedido_seq"'::regclass);
 ^   ALTER TABLE public."historialProductoUltimasVentas" ALTER COLUMN "numeroPedido" DROP DEFAULT;
       public          postgres    false    306    307    307            D           2604    18465    impuestosSistema id    DEFAULT     ~   ALTER TABLE ONLY public."impuestosSistema" ALTER COLUMN id SET DEFAULT nextval('public."impuestosSistema_id_seq"'::regclass);
 D   ALTER TABLE public."impuestosSistema" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    309    308    309            E           2604    18481 +   inventarioAlmacenReporteInventarioBodega id    DEFAULT     �   ALTER TABLE ONLY public."inventarioAlmacenReporteInventarioBodega" ALTER COLUMN id SET DEFAULT nextval('public."inventarioAlmacenReporteInventarioBodega_id_seq"'::regclass);
 \   ALTER TABLE public."inventarioAlmacenReporteInventarioBodega" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    313    310    313            F           2604    18482 6   inventarioAlmacenReporteInventarioBodega codigoFabrica    DEFAULT     �   ALTER TABLE ONLY public."inventarioAlmacenReporteInventarioBodega" ALTER COLUMN "codigoFabrica" SET DEFAULT nextval('public."inventarioAlmacenReporteInventarioBodega_codigoFabrica_seq"'::regclass);
 i   ALTER TABLE public."inventarioAlmacenReporteInventarioBodega" ALTER COLUMN "codigoFabrica" DROP DEFAULT;
       public          postgres    false    313    311    313            G           2604    18483 6   inventarioAlmacenReporteInventarioBodega codigoEmpresa    DEFAULT     �   ALTER TABLE ONLY public."inventarioAlmacenReporteInventarioBodega" ALTER COLUMN "codigoEmpresa" SET DEFAULT nextval('public."inventarioAlmacenReporteInventarioBodega_codigoEmpresa_seq"'::regclass);
 i   ALTER TABLE public."inventarioAlmacenReporteInventarioBodega" ALTER COLUMN "codigoEmpresa" DROP DEFAULT;
       public          postgres    false    313    312    313            H           2604    18497    inventarioGeneralDetalles id    DEFAULT     �   ALTER TABLE ONLY public."inventarioGeneralDetalles" ALTER COLUMN id SET DEFAULT nextval('public."inventarioGeneralDetalles_id_seq"'::regclass);
 M   ALTER TABLE public."inventarioGeneralDetalles" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    315    314    315            I           2604    18513 %   inventarioGeneralReporteInventario id    DEFAULT     �   ALTER TABLE ONLY public."inventarioGeneralReporteInventario" ALTER COLUMN id SET DEFAULT nextval('public."inventarioGeneralReporteInventario_id_seq"'::regclass);
 V   ALTER TABLE public."inventarioGeneralReporteInventario" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    316    319    319            J           2604    18514 0   inventarioGeneralReporteInventario codigoFabrica    DEFAULT     �   ALTER TABLE ONLY public."inventarioGeneralReporteInventario" ALTER COLUMN "codigoFabrica" SET DEFAULT nextval('public."inventarioGeneralReporteInventario_codigoFabrica_seq"'::regclass);
 c   ALTER TABLE public."inventarioGeneralReporteInventario" ALTER COLUMN "codigoFabrica" DROP DEFAULT;
       public          postgres    false    319    317    319            K           2604    18515 0   inventarioGeneralReporteInventario codigoEmpresa    DEFAULT     �   ALTER TABLE ONLY public."inventarioGeneralReporteInventario" ALTER COLUMN "codigoEmpresa" SET DEFAULT nextval('public."inventarioGeneralReporteInventario_codigoEmpresa_seq"'::regclass);
 c   ALTER TABLE public."inventarioGeneralReporteInventario" ALTER COLUMN "codigoEmpresa" DROP DEFAULT;
       public          postgres    false    318    319    319            L           2604    18530 "   inventarioGeneralTarjetaAlmacen id    DEFAULT     �   ALTER TABLE ONLY public."inventarioGeneralTarjetaAlmacen" ALTER COLUMN id SET DEFAULT nextval('public."inventarioGeneralTarjetaAlmacen_id_seq"'::regclass);
 S   ALTER TABLE public."inventarioGeneralTarjetaAlmacen" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    320    322    322            M           2604    18531 %   inventarioGeneralTarjetaAlmacen folio    DEFAULT     �   ALTER TABLE ONLY public."inventarioGeneralTarjetaAlmacen" ALTER COLUMN folio SET DEFAULT nextval('public."inventarioGeneralTarjetaAlmacen_folio_seq"'::regclass);
 V   ALTER TABLE public."inventarioGeneralTarjetaAlmacen" ALTER COLUMN folio DROP DEFAULT;
       public          postgres    false    321    322    322            N           2604    18547 &   inventarioXAlmacenReporteInventario id    DEFAULT     �   ALTER TABLE ONLY public."inventarioXAlmacenReporteInventario" ALTER COLUMN id SET DEFAULT nextval('public."inventarioXAlmacenReporteInventario_id_seq"'::regclass);
 W   ALTER TABLE public."inventarioXAlmacenReporteInventario" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    323    326    326            O           2604    18548 1   inventarioXAlmacenReporteInventario codigoEmpresa    DEFAULT     �   ALTER TABLE ONLY public."inventarioXAlmacenReporteInventario" ALTER COLUMN "codigoEmpresa" SET DEFAULT nextval('public."inventarioXAlmacenReporteInventario_codigoEmpresa_seq"'::regclass);
 d   ALTER TABLE public."inventarioXAlmacenReporteInventario" ALTER COLUMN "codigoEmpresa" DROP DEFAULT;
       public          postgres    false    324    326    326            P           2604    18549 4   inventarioXAlmacenReporteInventario codigoFabricante    DEFAULT     �   ALTER TABLE ONLY public."inventarioXAlmacenReporteInventario" ALTER COLUMN "codigoFabricante" SET DEFAULT nextval('public."inventarioXAlmacenReporteInventario_codigoFabricante_seq"'::regclass);
 g   ALTER TABLE public."inventarioXAlmacenReporteInventario" ALTER COLUMN "codigoFabricante" DROP DEFAULT;
       public          postgres    false    326    325    326            �           2604    19437    listadoClientes id    DEFAULT     |   ALTER TABLE ONLY public."listadoClientes" ALTER COLUMN id SET DEFAULT nextval('public."listadoClientes_id_seq"'::regclass);
 C   ALTER TABLE public."listadoClientes" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    478    480    480            �           2604    19438    listadoClientes numeroCliente    DEFAULT     �   ALTER TABLE ONLY public."listadoClientes" ALTER COLUMN "numeroCliente" SET DEFAULT nextval('public."listadoClientes_numeroCliente_seq"'::regclass);
 P   ALTER TABLE public."listadoClientes" ALTER COLUMN "numeroCliente" DROP DEFAULT;
       public          postgres    false    479    480    480            Q           2604    18580    listadoComisiones id    DEFAULT     �   ALTER TABLE ONLY public."listadoComisiones" ALTER COLUMN id SET DEFAULT nextval('public."listadoComisiones_id_seq"'::regclass);
 E   ALTER TABLE public."listadoComisiones" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    328    327    328            R           2604    18596    listadoEntradas id    DEFAULT     |   ALTER TABLE ONLY public."listadoEntradas" ALTER COLUMN id SET DEFAULT nextval('public."listadoEntradas_id_seq"'::regclass);
 C   ALTER TABLE public."listadoEntradas" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    329    332    332            S           2604    18597    listadoEntradas folio    DEFAULT     �   ALTER TABLE ONLY public."listadoEntradas" ALTER COLUMN folio SET DEFAULT nextval('public."listadoEntradas_folio_seq"'::regclass);
 F   ALTER TABLE public."listadoEntradas" ALTER COLUMN folio DROP DEFAULT;
       public          postgres    false    332    330    332            T           2604    18598    listadoEntradas codigoEmpresa    DEFAULT     �   ALTER TABLE ONLY public."listadoEntradas" ALTER COLUMN "codigoEmpresa" SET DEFAULT nextval('public."listadoEntradas_codigoEmpresa_seq"'::regclass);
 P   ALTER TABLE public."listadoEntradas" ALTER COLUMN "codigoEmpresa" DROP DEFAULT;
       public          postgres    false    331    332    332            �           2604    19620    listadoFormasPago id    DEFAULT     �   ALTER TABLE ONLY public."listadoFormasPago" ALTER COLUMN id SET DEFAULT nextval('public."listadoFormasPago_id_seq"'::regclass);
 E   ALTER TABLE public."listadoFormasPago" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    509    510    510            �           2604    19606    listadoPrecios id    DEFAULT     z   ALTER TABLE ONLY public."listadoPrecios" ALTER COLUMN id SET DEFAULT nextval('public."listadoPrecios_id_seq"'::regclass);
 B   ALTER TABLE public."listadoPrecios" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    507    508    508            U           2604    18614    listadoProductos id    DEFAULT     ~   ALTER TABLE ONLY public."listadoProductos" ALTER COLUMN id SET DEFAULT nextval('public."listadoProductos_id_seq"'::regclass);
 D   ALTER TABLE public."listadoProductos" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    333    336    336            V           2604    18615 !   listadoProductos codigoFabricante    DEFAULT     �   ALTER TABLE ONLY public."listadoProductos" ALTER COLUMN "codigoFabricante" SET DEFAULT nextval('public."listadoProductos_codigoFabricante_seq"'::regclass);
 T   ALTER TABLE public."listadoProductos" ALTER COLUMN "codigoFabricante" DROP DEFAULT;
       public          postgres    false    334    336    336            W           2604    18616    listadoProductos codigoEmpresa    DEFAULT     �   ALTER TABLE ONLY public."listadoProductos" ALTER COLUMN "codigoEmpresa" SET DEFAULT nextval('public."listadoProductos_codigoEmpresa_seq"'::regclass);
 Q   ALTER TABLE public."listadoProductos" ALTER COLUMN "codigoEmpresa" DROP DEFAULT;
       public          postgres    false    335    336    336            X           2604    18631    listadoProductosDescuento id    DEFAULT     �   ALTER TABLE ONLY public."listadoProductosDescuento" ALTER COLUMN id SET DEFAULT nextval('public."listadoProductosDescuento_id_seq"'::regclass);
 M   ALTER TABLE public."listadoProductosDescuento" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    337    339    339            Y           2604    18632 '   listadoProductosDescuento codigoEmpresa    DEFAULT     �   ALTER TABLE ONLY public."listadoProductosDescuento" ALTER COLUMN "codigoEmpresa" SET DEFAULT nextval('public."listadoProductosDescuento_codigoEmpresa_seq"'::regclass);
 Z   ALTER TABLE public."listadoProductosDescuento" ALTER COLUMN "codigoEmpresa" DROP DEFAULT;
       public          postgres    false    339    338    339            Z           2604    18648 "   listadoProductosMargenProductos id    DEFAULT     �   ALTER TABLE ONLY public."listadoProductosMargenProductos" ALTER COLUMN id SET DEFAULT nextval('public."listadoProductosMargenProductos_id_seq"'::regclass);
 S   ALTER TABLE public."listadoProductosMargenProductos" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    340    343    343            [           2604    18649 0   listadoProductosMargenProductos codigoFabricante    DEFAULT     �   ALTER TABLE ONLY public."listadoProductosMargenProductos" ALTER COLUMN "codigoFabricante" SET DEFAULT nextval('public."listadoProductosMargenProductos_codigoFabricante_seq"'::regclass);
 c   ALTER TABLE public."listadoProductosMargenProductos" ALTER COLUMN "codigoFabricante" DROP DEFAULT;
       public          postgres    false    343    341    343            \           2604    18650 -   listadoProductosMargenProductos codigoEmpresa    DEFAULT     �   ALTER TABLE ONLY public."listadoProductosMargenProductos" ALTER COLUMN "codigoEmpresa" SET DEFAULT nextval('public."listadoProductosMargenProductos_codigoEmpresa_seq"'::regclass);
 `   ALTER TABLE public."listadoProductosMargenProductos" ALTER COLUMN "codigoEmpresa" DROP DEFAULT;
       public          postgres    false    342    343    343            ]           2604    18665    listadoSalida id    DEFAULT     x   ALTER TABLE ONLY public."listadoSalida" ALTER COLUMN id SET DEFAULT nextval('public."listadoSalida_id_seq"'::regclass);
 A   ALTER TABLE public."listadoSalida" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    344    346    346            ^           2604    18666    listadoSalida folio    DEFAULT     ~   ALTER TABLE ONLY public."listadoSalida" ALTER COLUMN folio SET DEFAULT nextval('public."listadoSalida_folio_seq"'::regclass);
 D   ALTER TABLE public."listadoSalida" ALTER COLUMN folio DROP DEFAULT;
       public          postgres    false    345    346    346            _           2604    18681    listadoTransferencia id    DEFAULT     �   ALTER TABLE ONLY public."listadoTransferencia" ALTER COLUMN id SET DEFAULT nextval('public."listadoTransferencia_id_seq"'::regclass);
 H   ALTER TABLE public."listadoTransferencia" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    347    349    349            `           2604    18682    listadoTransferencia folio    DEFAULT     �   ALTER TABLE ONLY public."listadoTransferencia" ALTER COLUMN folio SET DEFAULT nextval('public."listadoTransferencia_folio_seq"'::regclass);
 K   ALTER TABLE public."listadoTransferencia" ALTER COLUMN folio DROP DEFAULT;
       public          postgres    false    349    348    349            a           2604    18696 2   listadoTransferenciaMasivaDetallesTransferencia id    DEFAULT     �   ALTER TABLE ONLY public."listadoTransferenciaMasivaDetallesTransferencia" ALTER COLUMN id SET DEFAULT nextval('public."listadoTransferenciaMasivaDetallesTransferencia_id_seq"'::regclass);
 c   ALTER TABLE public."listadoTransferenciaMasivaDetallesTransferencia" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    350    351    351            b           2604    18711 5   listadoTransferenciasMasivasProductosTransferencia id    DEFAULT     �   ALTER TABLE ONLY public."listadoTransferenciasMasivasProductosTransferencia" ALTER COLUMN id SET DEFAULT nextval('public."listadoTransferenciasMasivasProductosTransferencia_id_seq"'::regclass);
 f   ALTER TABLE public."listadoTransferenciasMasivasProductosTransferencia" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    352    354    354            c           2604    18712 9   listadoTransferenciasMasivasProductosTransferencia codigo    DEFAULT     �   ALTER TABLE ONLY public."listadoTransferenciasMasivasProductosTransferencia" ALTER COLUMN codigo SET DEFAULT nextval('public."listadoTransferenciasMasivasProductosTransferencia_codigo_seq"'::regclass);
 j   ALTER TABLE public."listadoTransferenciasMasivasProductosTransferencia" ALTER COLUMN codigo DROP DEFAULT;
       public          postgres    false    354    353    354            d           2604    18728 .   listadoTransferenciasMasvasArchivosAdjuntos id    DEFAULT     �   ALTER TABLE ONLY public."listadoTransferenciasMasvasArchivosAdjuntos" ALTER COLUMN id SET DEFAULT nextval('public."listadoTransferenciasMasvasArchivosAdjuntos_id_seq"'::regclass);
 _   ALTER TABLE public."listadoTransferenciasMasvasArchivosAdjuntos" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    355    357    357            e           2604    18729 2   listadoTransferenciasMasvasArchivosAdjuntos numero    DEFAULT     �   ALTER TABLE ONLY public."listadoTransferenciasMasvasArchivosAdjuntos" ALTER COLUMN numero SET DEFAULT nextval('public."listadoTransferenciasMasvasArchivosAdjuntos_numero_seq"'::regclass);
 c   ALTER TABLE public."listadoTransferenciasMasvasArchivosAdjuntos" ALTER COLUMN numero DROP DEFAULT;
       public          postgres    false    357    356    357            f           2604    18743    listadoVendedores id    DEFAULT     �   ALTER TABLE ONLY public."listadoVendedores" ALTER COLUMN id SET DEFAULT nextval('public."listadoVendedores_id_seq"'::regclass);
 E   ALTER TABLE public."listadoVendedores" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    359    358    359            g           2604    18758    logistcaPedidos id    DEFAULT     |   ALTER TABLE ONLY public."logistcaPedidos" ALTER COLUMN id SET DEFAULT nextval('public."logistcaPedidos_id_seq"'::regclass);
 C   ALTER TABLE public."logistcaPedidos" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    360    362    362            h           2604    18759    logistcaPedidos folio     DEFAULT     �   ALTER TABLE ONLY public."logistcaPedidos" ALTER COLUMN "folio " SET DEFAULT nextval('public."logistcaPedidos_folio _seq"'::regclass);
 I   ALTER TABLE public."logistcaPedidos" ALTER COLUMN "folio " DROP DEFAULT;
       public          postgres    false    361    362    362            i           2604    18783 &   margenVentasReporteUtilidadesVentas id    DEFAULT     �   ALTER TABLE ONLY public."margenVentasReporteUtilidadesVentas" ALTER COLUMN id SET DEFAULT nextval('public."margenVentasReporteUtilidadesVentas_id_seq"'::regclass);
 W   ALTER TABLE public."margenVentasReporteUtilidadesVentas" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    365    363    365            j           2604    18784 )   margenVentasReporteUtilidadesVentas folio    DEFAULT     �   ALTER TABLE ONLY public."margenVentasReporteUtilidadesVentas" ALTER COLUMN folio SET DEFAULT nextval('public."margenVentasReporteUtilidadesVentas_folio_seq"'::regclass);
 Z   ALTER TABLE public."margenVentasReporteUtilidadesVentas" ALTER COLUMN folio DROP DEFAULT;
       public          postgres    false    365    364    365            q           2604    18854    mercadosListadoGiros id    DEFAULT     �   ALTER TABLE ONLY public."mercadosListadoGiros" ALTER COLUMN id SET DEFAULT nextval('public."mercadosListadoGiros_id_seq"'::regclass);
 H   ALTER TABLE public."mercadosListadoGiros" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    376    377    377            r           2604    18863    monedasSistema id    DEFAULT     z   ALTER TABLE ONLY public."monedasSistema" ALTER COLUMN id SET DEFAULT nextval('public."monedasSistema_id_seq"'::regclass);
 B   ALTER TABLE public."monedasSistema" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    378    379    379            k           2604    18798    motivosEntrada id    DEFAULT     z   ALTER TABLE ONLY public."motivosEntrada" ALTER COLUMN id SET DEFAULT nextval('public."motivosEntrada_id_seq"'::regclass);
 B   ALTER TABLE public."motivosEntrada" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    366    367    367            l           2604    18812    motivosSalida id    DEFAULT     x   ALTER TABLE ONLY public."motivosSalida" ALTER COLUMN id SET DEFAULT nextval('public."motivosSalida_id_seq"'::regclass);
 A   ALTER TABLE public."motivosSalida" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    368    369    369            m           2604    18828    notasCredito id    DEFAULT     v   ALTER TABLE ONLY public."notasCredito" ALTER COLUMN id SET DEFAULT nextval('public."notasCredito_id_seq"'::regclass);
 @   ALTER TABLE public."notasCredito" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    373    370    373            n           2604    18829    notasCredito serie    DEFAULT     |   ALTER TABLE ONLY public."notasCredito" ALTER COLUMN serie SET DEFAULT nextval('public."notasCredito_serie_seq"'::regclass);
 C   ALTER TABLE public."notasCredito" ALTER COLUMN serie DROP DEFAULT;
       public          postgres    false    373    371    373            o           2604    18830    notasCredito folio    DEFAULT     |   ALTER TABLE ONLY public."notasCredito" ALTER COLUMN folio SET DEFAULT nextval('public."notasCredito_folio_seq"'::regclass);
 C   ALTER TABLE public."notasCredito" ALTER COLUMN folio DROP DEFAULT;
       public          postgres    false    372    373    373            p           2604    18845    notificacion id    DEFAULT     r   ALTER TABLE ONLY public.notificacion ALTER COLUMN id SET DEFAULT nextval('public.notificacion_id_seq'::regclass);
 >   ALTER TABLE public.notificacion ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    374    375    375            �           2604    19532    nuevaCotizacion id    DEFAULT     |   ALTER TABLE ONLY public."nuevaCotizacion" ALTER COLUMN id SET DEFAULT nextval('public."nuevaCotizacion_id_seq"'::regclass);
 C   ALTER TABLE public."nuevaCotizacion" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    495    497    497            �           2604    19533    nuevaCotizacion codigo    DEFAULT     �   ALTER TABLE ONLY public."nuevaCotizacion" ALTER COLUMN codigo SET DEFAULT nextval('public."nuevaCotizacion_codigo_seq"'::regclass);
 G   ALTER TABLE public."nuevaCotizacion" ALTER COLUMN codigo DROP DEFAULT;
       public          postgres    false    497    496    497            s           2604    18873     nuevaOrdenCompraFoliosSurtido id    DEFAULT     �   ALTER TABLE ONLY public."nuevaOrdenCompraFoliosSurtido" ALTER COLUMN id SET DEFAULT nextval('public."nuevaOrdenCompraFoliosSurtido_id_seq"'::regclass);
 Q   ALTER TABLE public."nuevaOrdenCompraFoliosSurtido" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    381    380    381            t           2604    18886 &   nuevasOrdenesCompraArchivosAdjuntos id    DEFAULT     �   ALTER TABLE ONLY public."nuevasOrdenesCompraArchivosAdjuntos" ALTER COLUMN id SET DEFAULT nextval('public."nuevasOrdenesCompraArchivosAdjuntos_id_seq"'::regclass);
 W   ALTER TABLE public."nuevasOrdenesCompraArchivosAdjuntos" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    384    382    384            u           2604    18887 *   nuevasOrdenesCompraArchivosAdjuntos numero    DEFAULT     �   ALTER TABLE ONLY public."nuevasOrdenesCompraArchivosAdjuntos" ALTER COLUMN numero SET DEFAULT nextval('public."nuevasOrdenesCompraArchivosAdjuntos_numero_seq"'::regclass);
 [   ALTER TABLE public."nuevasOrdenesCompraArchivosAdjuntos" ALTER COLUMN numero DROP DEFAULT;
       public          postgres    false    384    383    384            v           2604    18902    ordenCompraArchivosAdjuntos id    DEFAULT     �   ALTER TABLE ONLY public."ordenCompraArchivosAdjuntos" ALTER COLUMN id SET DEFAULT nextval('public."ordenCompraArchivosAdjuntos_id_seq"'::regclass);
 O   ALTER TABLE public."ordenCompraArchivosAdjuntos" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    385    387    387            w           2604    18903 "   ordenCompraArchivosAdjuntos numero    DEFAULT     �   ALTER TABLE ONLY public."ordenCompraArchivosAdjuntos" ALTER COLUMN numero SET DEFAULT nextval('public."ordenCompraArchivosAdjuntos_numero_seq"'::regclass);
 S   ALTER TABLE public."ordenCompraArchivosAdjuntos" ALTER COLUMN numero DROP DEFAULT;
       public          postgres    false    386    387    387            x           2604    18917    ordenCompraFoliosSurtido id    DEFAULT     �   ALTER TABLE ONLY public."ordenCompraFoliosSurtido" ALTER COLUMN id SET DEFAULT nextval('public."ordenCompraFoliosSurtido_id_seq"'::regclass);
 L   ALTER TABLE public."ordenCompraFoliosSurtido" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    388    390    390            y           2604    18918    ordenCompraFoliosSurtido numero    DEFAULT     �   ALTER TABLE ONLY public."ordenCompraFoliosSurtido" ALTER COLUMN numero SET DEFAULT nextval('public."ordenCompraFoliosSurtido_numero_seq"'::regclass);
 P   ALTER TABLE public."ordenCompraFoliosSurtido" ALTER COLUMN numero DROP DEFAULT;
       public          postgres    false    389    390    390            z           2604    18931    ordenesCompraListadoEntradas id    DEFAULT     �   ALTER TABLE ONLY public."ordenesCompraListadoEntradas" ALTER COLUMN id SET DEFAULT nextval('public."ordenesCompraListadoEntradas_id_seq"'::regclass);
 P   ALTER TABLE public."ordenesCompraListadoEntradas" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    393    391    393            {           2604    18932 "   ordenesCompraListadoEntradas folio    DEFAULT     �   ALTER TABLE ONLY public."ordenesCompraListadoEntradas" ALTER COLUMN folio SET DEFAULT nextval('public."ordenesCompraListadoEntradas_numero_seq"'::regclass);
 S   ALTER TABLE public."ordenesCompraListadoEntradas" ALTER COLUMN folio DROP DEFAULT;
       public          postgres    false    392    393    393            �           2604    19549    pagos id    DEFAULT     d   ALTER TABLE ONLY public.pagos ALTER COLUMN id SET DEFAULT nextval('public.pagos_id_seq'::regclass);
 7   ALTER TABLE public.pagos ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    498    500    500            �           2604    19550    pagos folio    DEFAULT     j   ALTER TABLE ONLY public.pagos ALTER COLUMN folio SET DEFAULT nextval('public.pagos_folio_seq'::regclass);
 :   ALTER TABLE public.pagos ALTER COLUMN folio DROP DEFAULT;
       public          postgres    false    500    499    500            '           2604    17787    pedido idpedido    DEFAULT     s   ALTER TABLE ONLY public.pedido ALTER COLUMN idpedido SET DEFAULT nextval('public.pedidoo_idpedido_seq'::regclass);
 >   ALTER TABLE public.pedido ALTER COLUMN idpedido DROP DEFAULT;
       public          postgres    false    235    236    236            |           2604    18947 
   pedidos id    DEFAULT     h   ALTER TABLE ONLY public.pedidos ALTER COLUMN id SET DEFAULT nextval('public.pedidos_id_seq'::regclass);
 9   ALTER TABLE public.pedidos ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    396    394    396            }           2604    18948    pedidos folio    DEFAULT     n   ALTER TABLE ONLY public.pedidos ALTER COLUMN folio SET DEFAULT nextval('public.pedidos_folio_seq'::regclass);
 <   ALTER TABLE public.pedidos ALTER COLUMN folio DROP DEFAULT;
       public          postgres    false    396    395    396                       2604    18958    pedidosPendientesSurtir id    DEFAULT     �   ALTER TABLE ONLY public."pedidosPendientesSurtir" ALTER COLUMN id SET DEFAULT nextval('public."pedidosPendientesSurtir_id_seq"'::regclass);
 K   ALTER TABLE public."pedidosPendientesSurtir" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    399    397    399            �           2604    18959    pedidosPendientesSurtir folio    DEFAULT     �   ALTER TABLE ONLY public."pedidosPendientesSurtir" ALTER COLUMN folio SET DEFAULT nextval('public."pedidosPendientesSurtir_folio_seq"'::regclass);
 N   ALTER TABLE public."pedidosPendientesSurtir" ALTER COLUMN folio DROP DEFAULT;
       public          postgres    false    399    398    399            (           2604    17809    productos idproducto    DEFAULT     }   ALTER TABLE ONLY public.productos ALTER COLUMN idproducto SET DEFAULT nextval('public.productoos_idproducto_seq'::regclass);
 C   ALTER TABLE public.productos ALTER COLUMN idproducto DROP DEFAULT;
       public          postgres    false    237    240    240            )           2604    17810    productos codigoEmpresa    DEFAULT     �   ALTER TABLE ONLY public.productos ALTER COLUMN "codigoEmpresa" SET DEFAULT nextval('public."productoos_codigoEmpresa_seq"'::regclass);
 H   ALTER TABLE public.productos ALTER COLUMN "codigoEmpresa" DROP DEFAULT;
       public          postgres    false    240    238    240            *           2604    17811    productos codigoFabricante    DEFAULT     �   ALTER TABLE ONLY public.productos ALTER COLUMN "codigoFabricante" SET DEFAULT nextval('public."productoos_codigoFabricante_seq"'::regclass);
 K   ALTER TABLE public.productos ALTER COLUMN "codigoFabricante" DROP DEFAULT;
       public          postgres    false    239    240    240            �           2604    18970    productosCotizados id    DEFAULT     �   ALTER TABLE ONLY public."productosCotizados" ALTER COLUMN id SET DEFAULT nextval('public."productosCotizados_id_seq"'::regclass);
 F   ALTER TABLE public."productosCotizados" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    400    401    401            �           2604    18985    productosLaOrdenCompra id    DEFAULT     �   ALTER TABLE ONLY public."productosLaOrdenCompra" ALTER COLUMN id SET DEFAULT nextval('public."productosLaOrdenCompra_id_seq"'::regclass);
 J   ALTER TABLE public."productosLaOrdenCompra" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    402    403    403            �           2604    18999    productosPedido id    DEFAULT     |   ALTER TABLE ONLY public."productosPedido" ALTER COLUMN id SET DEFAULT nextval('public."productosPedido_id_seq"'::regclass);
 C   ALTER TABLE public."productosPedido" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    404    405    405            �           2604    19013    productosRelacionados id    DEFAULT     �   ALTER TABLE ONLY public."productosRelacionados" ALTER COLUMN id SET DEFAULT nextval('public."productosRelacionados_id_seq"'::regclass);
 I   ALTER TABLE public."productosRelacionados" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    407    406    407            �           2604    19027    productosSurtidosPedido id    DEFAULT     �   ALTER TABLE ONLY public."productosSurtidosPedido" ALTER COLUMN id SET DEFAULT nextval('public."productosSurtidosPedido_id_seq"'::regclass);
 K   ALTER TABLE public."productosSurtidosPedido" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    409    408    409            �           2604    19042    productosSurtirPedido id    DEFAULT     �   ALTER TABLE ONLY public."productosSurtirPedido" ALTER COLUMN id SET DEFAULT nextval('public."productosSurtirPedido_id_seq"'::regclass);
 I   ALTER TABLE public."productosSurtirPedido" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    411    410    411            �           2604    19056    productosTransferencia id    DEFAULT     �   ALTER TABLE ONLY public."productosTransferencia" ALTER COLUMN id SET DEFAULT nextval('public."productosTransferencia_id_seq"'::regclass);
 J   ALTER TABLE public."productosTransferencia" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    412    413    413            �           2604    19070    provedores id    DEFAULT     n   ALTER TABLE ONLY public.provedores ALTER COLUMN id SET DEFAULT nextval('public.provedores_id_seq'::regclass);
 <   ALTER TABLE public.provedores ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    414    415    415            �           2604    19084    provedoresProducto id    DEFAULT     �   ALTER TABLE ONLY public."provedoresProducto" ALTER COLUMN id SET DEFAULT nextval('public."provedoresProducto_id_seq"'::regclass);
 F   ALTER TABLE public."provedoresProducto" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    417    416    417            �           2604    19100    recordPorProducto id    DEFAULT     �   ALTER TABLE ONLY public."recordPorProducto" ALTER COLUMN id SET DEFAULT nextval('public."recordPorProducto_id_seq"'::regclass);
 E   ALTER TABLE public."recordPorProducto" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    418    420    420            �           2604    19101    recordPorProducto idProducto    DEFAULT     �   ALTER TABLE ONLY public."recordPorProducto" ALTER COLUMN "idProducto" SET DEFAULT nextval('public."recordPorProducto_idProducto_seq"'::regclass);
 O   ALTER TABLE public."recordPorProducto" ALTER COLUMN "idProducto" DROP DEFAULT;
       public          postgres    false    419    420    420            �           2604    19116    recordProducto id    DEFAULT     z   ALTER TABLE ONLY public."recordProducto" ALTER COLUMN id SET DEFAULT nextval('public."recordProducto_id_seq"'::regclass);
 B   ALTER TABLE public."recordProducto" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    421    423    423            �           2604    19117    recordProducto idProducto    DEFAULT     �   ALTER TABLE ONLY public."recordProducto" ALTER COLUMN "idProducto" SET DEFAULT nextval('public."recordProducto_idProducto_seq"'::regclass);
 L   ALTER TABLE public."recordProducto" ALTER COLUMN "idProducto" DROP DEFAULT;
       public          postgres    false    422    423    423            �           2604    19579    refreshTokens id    DEFAULT     x   ALTER TABLE ONLY public."refreshTokens" ALTER COLUMN id SET DEFAULT nextval('public."refreshTokens_id_seq"'::regclass);
 A   ALTER TABLE public."refreshTokens" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    504    503            �           2604    19131    reporteCobranza id    DEFAULT     |   ALTER TABLE ONLY public."reporteCobranza" ALTER COLUMN id SET DEFAULT nextval('public."reporteCobranza_id_seq"'::regclass);
 C   ALTER TABLE public."reporteCobranza" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    425    424    425            �           2604    19146    reporteComisiones id    DEFAULT     �   ALTER TABLE ONLY public."reporteComisiones" ALTER COLUMN id SET DEFAULT nextval('public."reporteComisiones_id_seq"'::regclass);
 E   ALTER TABLE public."reporteComisiones" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    426    428    428            �           2604    19147    reporteComisiones folio    DEFAULT     �   ALTER TABLE ONLY public."reporteComisiones" ALTER COLUMN folio SET DEFAULT nextval('public."reporteComisiones_folio_seq"'::regclass);
 H   ALTER TABLE public."reporteComisiones" ALTER COLUMN folio DROP DEFAULT;
       public          postgres    false    427    428    428            �           2604    19162    reporteFacturas id    DEFAULT     |   ALTER TABLE ONLY public."reporteFacturas" ALTER COLUMN id SET DEFAULT nextval('public."reporteFacturas_id_seq"'::regclass);
 C   ALTER TABLE public."reporteFacturas" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    431    429    431            �           2604    19163    reporteFacturas folio    DEFAULT     �   ALTER TABLE ONLY public."reporteFacturas" ALTER COLUMN folio SET DEFAULT nextval('public."reporteFacturas_folio_seq"'::regclass);
 F   ALTER TABLE public."reporteFacturas" ALTER COLUMN folio DROP DEFAULT;
       public          postgres    false    431    430    431            �           2604    19174    reporteInventario id    DEFAULT     �   ALTER TABLE ONLY public."reporteInventario" ALTER COLUMN id SET DEFAULT nextval('public."reporteInventario_id_seq"'::regclass);
 E   ALTER TABLE public."reporteInventario" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    435    432    435            �           2604    19175    reporteInventario codigoFabrica    DEFAULT     �   ALTER TABLE ONLY public."reporteInventario" ALTER COLUMN "codigoFabrica" SET DEFAULT nextval('public."reporteInventario_codigoFabrica_seq"'::regclass);
 R   ALTER TABLE public."reporteInventario" ALTER COLUMN "codigoFabrica" DROP DEFAULT;
       public          postgres    false    433    435    435            �           2604    19176    reporteInventario codigoEmpresa    DEFAULT     �   ALTER TABLE ONLY public."reporteInventario" ALTER COLUMN "codigoEmpresa" SET DEFAULT nextval('public."reporteInventario_codigoEmpresa_seq"'::regclass);
 R   ALTER TABLE public."reporteInventario" ALTER COLUMN "codigoEmpresa" DROP DEFAULT;
       public          postgres    false    435    434    435            �           2604    19448    reporteVentas id    DEFAULT     x   ALTER TABLE ONLY public."reporteVentas" ALTER COLUMN id SET DEFAULT nextval('public."reporteVentas_id_seq"'::regclass);
 A   ALTER TABLE public."reporteVentas" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    481    483    483            �           2604    19449    reporteVentas folio    DEFAULT     ~   ALTER TABLE ONLY public."reporteVentas" ALTER COLUMN folio SET DEFAULT nextval('public."reporteVentas_folio_seq"'::regclass);
 D   ALTER TABLE public."reporteVentas" ALTER COLUMN folio DROP DEFAULT;
       public          postgres    false    483    482    483            �           2604    19190    reporteVentasClienfe id    DEFAULT     �   ALTER TABLE ONLY public."reporteVentasClienfe" ALTER COLUMN id SET DEFAULT nextval('public."reporteVentasClienfe_id_seq"'::regclass);
 H   ALTER TABLE public."reporteVentasClienfe" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    437    436    437            �           2604    19205 &   sucursalesAlmacenesListadoProductos id    DEFAULT     �   ALTER TABLE ONLY public."sucursalesAlmacenesListadoProductos" ALTER COLUMN id SET DEFAULT nextval('public."sucursalesAlmacenesListadoProductos_id_seq"'::regclass);
 W   ALTER TABLE public."sucursalesAlmacenesListadoProductos" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    438    439    439            �           2604    19831    sucursalesDatos id    DEFAULT     |   ALTER TABLE ONLY public."sucursalesDatos" ALTER COLUMN id SET DEFAULT nextval('public."sucursalesDatos_id_seq"'::regclass);
 C   ALTER TABLE public."sucursalesDatos" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    525    524            �           2604    19219 	   surtir id    DEFAULT     f   ALTER TABLE ONLY public.surtir ALTER COLUMN id SET DEFAULT nextval('public.surtir_id_seq'::regclass);
 8   ALTER TABLE public.surtir ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    441    440    441            �           2604    19234    tarjetaCredito id    DEFAULT     z   ALTER TABLE ONLY public."tarjetaCredito" ALTER COLUMN id SET DEFAULT nextval('public."tarjetaCredito_id_seq"'::regclass);
 B   ALTER TABLE public."tarjetaCredito" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    442    444    444            �           2604    19235    tarjetaCredito ticket    DEFAULT     �   ALTER TABLE ONLY public."tarjetaCredito" ALTER COLUMN ticket SET DEFAULT nextval('public."tarjetaCredito_ticket_seq"'::regclass);
 F   ALTER TABLE public."tarjetaCredito" ALTER COLUMN ticket DROP DEFAULT;
       public          postgres    false    443    444    444            �           2604    19250    tarjetaDebito id    DEFAULT     x   ALTER TABLE ONLY public."tarjetaDebito" ALTER COLUMN id SET DEFAULT nextval('public."tarjetaDebito_id_seq"'::regclass);
 A   ALTER TABLE public."tarjetaDebito" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    447    445    447            �           2604    19251    tarjetaDebito ticket    DEFAULT     �   ALTER TABLE ONLY public."tarjetaDebito" ALTER COLUMN ticket SET DEFAULT nextval('public."tarjetaDebito_ticket_seq"'::regclass);
 E   ALTER TABLE public."tarjetaDebito" ALTER COLUMN ticket DROP DEFAULT;
       public          postgres    false    447    446    447            �           2604    19277 	   ticket id    DEFAULT     f   ALTER TABLE ONLY public.ticket ALTER COLUMN id SET DEFAULT nextval('public.ticket_id_seq'::regclass);
 8   ALTER TABLE public.ticket ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    453    451    453            �           2604    19278    ticket ticket    DEFAULT     n   ALTER TABLE ONLY public.ticket ALTER COLUMN ticket SET DEFAULT nextval('public.ticket_ticket_seq'::regclass);
 <   ALTER TABLE public.ticket ALTER COLUMN ticket DROP DEFAULT;
       public          postgres    false    453    452    453            �           2604    19266 
   tickets id    DEFAULT     h   ALTER TABLE ONLY public.tickets ALTER COLUMN id SET DEFAULT nextval('public.tickets_id_seq'::regclass);
 9   ALTER TABLE public.tickets ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    450    448    450            �           2604    19267    tickets ticket    DEFAULT     p   ALTER TABLE ONLY public.tickets ALTER COLUMN ticket SET DEFAULT nextval('public.tickets_ticket_seq'::regclass);
 =   ALTER TABLE public.tickets ALTER COLUMN ticket DROP DEFAULT;
       public          postgres    false    449    450    450            �           2604    19298    tiposEnvioGastosEnvio id    DEFAULT     �   ALTER TABLE ONLY public."tiposEnvioGastosEnvio" ALTER COLUMN id SET DEFAULT nextval('public."tiposEnvioGastosEnvio_id_seq"'::regclass);
 I   ALTER TABLE public."tiposEnvioGastosEnvio" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    454    455    455            �           2604    19328 *   transferenciaAlmacenesListadoIndividual id    DEFAULT     �   ALTER TABLE ONLY public."transferenciaAlmacenesListadoIndividual" ALTER COLUMN id SET DEFAULT nextval('public."transferenciaAlmacenesListadoIndividual_id_seq"'::regclass);
 [   ALTER TABLE public."transferenciaAlmacenesListadoIndividual" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    462    459    462            �           2604    19329 -   transferenciaAlmacenesListadoIndividual folio    DEFAULT     �   ALTER TABLE ONLY public."transferenciaAlmacenesListadoIndividual" ALTER COLUMN folio SET DEFAULT nextval('public."transferenciaAlmacenesListadoIndividual_folio_seq"'::regclass);
 ^   ALTER TABLE public."transferenciaAlmacenesListadoIndividual" ALTER COLUMN folio DROP DEFAULT;
       public          postgres    false    460    462    462            �           2604    19330 5   transferenciaAlmacenesListadoIndividual codigoEmpresa    DEFAULT     �   ALTER TABLE ONLY public."transferenciaAlmacenesListadoIndividual" ALTER COLUMN "codigoEmpresa" SET DEFAULT nextval('public."transferenciaAlmacenesListadoIndividual_codigoEmpresa_seq"'::regclass);
 h   ALTER TABLE public."transferenciaAlmacenesListadoIndividual" ALTER COLUMN "codigoEmpresa" DROP DEFAULT;
       public          postgres    false    461    462    462            �           2604    19311 "   transferenciaIndividualArchivos id    DEFAULT     �   ALTER TABLE ONLY public."transferenciaIndividualArchivos" ALTER COLUMN id SET DEFAULT nextval('public."transferenciIndividualArchivos_id_seq"'::regclass);
 S   ALTER TABLE public."transferenciaIndividualArchivos" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    458    456    458            �           2604    19312 &   transferenciaIndividualArchivos numero    DEFAULT     �   ALTER TABLE ONLY public."transferenciaIndividualArchivos" ALTER COLUMN numero SET DEFAULT nextval('public."transferenciIndividualArchivos_numero_seq"'::regclass);
 W   ALTER TABLE public."transferenciaIndividualArchivos" ALTER COLUMN numero DROP DEFAULT;
       public          postgres    false    458    457    458            �           2604    19344 "   transferenciaIndividualDetalles id    DEFAULT     �   ALTER TABLE ONLY public."transferenciaIndividualDetalles" ALTER COLUMN id SET DEFAULT nextval('public."transferenciaIndividualDetalles_id_seq"'::regclass);
 S   ALTER TABLE public."transferenciaIndividualDetalles" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    464    463    464            �           2604    19359    ubicacionTarjetaAlmacen id    DEFAULT     �   ALTER TABLE ONLY public."ubicacionTarjetaAlmacen" ALTER COLUMN id SET DEFAULT nextval('public."uicacionTarjetaAlmacen_id_seq"'::regclass);
 K   ALTER TABLE public."ubicacionTarjetaAlmacen" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    465    467    467            �           2604    19360    ubicacionTarjetaAlmacen folio    DEFAULT     �   ALTER TABLE ONLY public."ubicacionTarjetaAlmacen" ALTER COLUMN folio SET DEFAULT nextval('public."uicacionTarjetaAlmacen_folio_seq"'::regclass);
 N   ALTER TABLE public."ubicacionTarjetaAlmacen" ALTER COLUMN folio DROP DEFAULT;
       public          postgres    false    466    467    467            �           2604    19570    usuarios id    DEFAULT     j   ALTER TABLE ONLY public.usuarios ALTER COLUMN id SET DEFAULT nextval('public.usuarios_id_seq'::regclass);
 :   ALTER TABLE public.usuarios ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    502    501            �           2604    19375    vendedores id    DEFAULT     n   ALTER TABLE ONLY public.vendedores ALTER COLUMN id SET DEFAULT nextval('public.vendedores_id_seq'::regclass);
 <   ALTER TABLE public.vendedores ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    469    468    469            �           2604    19738    vendedoresImages id    DEFAULT     ~   ALTER TABLE ONLY public."vendedoresImages" ALTER COLUMN id SET DEFAULT nextval('public."vendedoresImages_id_seq"'::regclass);
 D   ALTER TABLE public."vendedoresImages" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    516    515    516            �           2604    19390    ventasEfectivo id    DEFAULT     z   ALTER TABLE ONLY public."ventasEfectivo" ALTER COLUMN id SET DEFAULT nextval('public."ventasEfectivo_id_seq"'::regclass);
 B   ALTER TABLE public."ventasEfectivo" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    470    472    472            �           2604    19391    ventasEfectivo ticket    DEFAULT     �   ALTER TABLE ONLY public."ventasEfectivo" ALTER COLUMN ticket SET DEFAULT nextval('public."ventasEfectivo_ticket_seq"'::regclass);
 F   ALTER TABLE public."ventasEfectivo" ALTER COLUMN ticket DROP DEFAULT;
       public          postgres    false    471    472    472            �           2604    19406    ventasRealizadas id    DEFAULT     ~   ALTER TABLE ONLY public."ventasRealizadas" ALTER COLUMN id SET DEFAULT nextval('public."ventasRealizadas_id_seq"'::regclass);
 D   ALTER TABLE public."ventasRealizadas" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    473    475    475            �           2604    19407    ventasRealizadas ticket    DEFAULT     �   ALTER TABLE ONLY public."ventasRealizadas" ALTER COLUMN ticket SET DEFAULT nextval('public."ventasRealizadas_ticket_seq"'::regclass);
 H   ALTER TABLE public."ventasRealizadas" ALTER COLUMN ticket DROP DEFAULT;
       public          postgres    false    474    475    475            �           2604    19421    verPedido id    DEFAULT     p   ALTER TABLE ONLY public."verPedido" ALTER COLUMN id SET DEFAULT nextval('public."verPedido_id_seq"'::regclass);
 =   ALTER TABLE public."verPedido" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    477    476    477            n          0    16399    abonoAplicadoEfectivo 
   TABLE DATA           �   COPY public."abonoAplicadoEfectivo" (folio, usuario, fecha, comentario, importe, "isUpdated", "isDeleted", "DateCreation", "DateModification", id) FROM stdin;
    public          postgres    false    214   P.      o          0    16404    abonosAplicados 
   TABLE DATA           �   COPY public."abonosAplicados" (efectivo, "tarjetaDebito", "tarjetaCredito", cheque, credito, "valesDespensa", transferencia, deposito, "saldoFavor", total, "isUpdated", "isDeleted", "DateCreation", "DateModification", id) FROM stdin;
    public          postgres    false    215   m.      p          0    16407    abonosCancelados 
   TABLE DATA           �   COPY public."abonosCancelados" (efectivo, "tarjetaDebito", "tarjetaCredito", cheque, credito, "valesDespensa", transferencia, deposito, "saldoFavor", total, "isUpdated", "isDeleted", "DateCreation", "DateModification", id) FROM stdin;
    public          postgres    false    216   �.      �          0    19512    agregarProductoCotizacion 
   TABLE DATA           �   COPY public."agregarProductoCotizacion" (id, "codigoEmpresaa", "codigoFabricante", nombre, marca, existencia, bo, cantidad, precio, descuento, total, imagen, "idProducto", "idCotizacion") FROM stdin;
    public          postgres    false    494   �.      q          0    16410    agregarProductoRelacionado 
   TABLE DATA           �   COPY public."agregarProductoRelacionado" (imagen, "codigoEmpresa", nombre, "isUpdated", "isDeleted", "DateCreation", "DateModification", id, "idProducto") FROM stdin;
    public          postgres    false    217   �.      r          0    16415    agregarProvedor 
   TABLE DATA           w   COPY public."agregarProvedor" (provedor, "isUpdated", "isDeleted", "DateCreation", "DateModification", id) FROM stdin;
    public          postgres    false    218   �.      s          0    16420    almacenSucursal 
   TABLE DATA           {   COPY public."almacenSucursal" (nombre, tipo, "isUpdated", "isDeleted", "DateCreation", "DateModification", id) FROM stdin;
    public          postgres    false    219   �.      t          0    16425 '   archivosAdjuntosListadoArchivosAdjuntos 
   TABLE DATA           �   COPY public."archivosAdjuntosListadoArchivosAdjuntos" (numero, archivo, "isUpdated", "isDeleted", "DateCreation", "DateModification", id) FROM stdin;
    public          postgres    false    220   /      u          0    16430    buscarProducto 
   TABLE DATA           �   COPY public."buscarProducto" (nombre, precio, existencia, "isUpdated", "isDeleted", "DateCreation", "DateModification", id) FROM stdin;
    public          postgres    false    221   8/      v          0    16435    busquedaReportes 
   TABLE DATA           �   COPY public."busquedaReportes" (nombre, fecha, "ventasDia", "comisionFinal", folio, cliente, venta, "%descuento", pago, tipo, "formaPago", "%comision", comision, "isUpdated", "isDeleted", "DateCreation", "DateModification", id) FROM stdin;
    public          postgres    false    222   U/      w          0    16440 	   categoria 
   TABLE DATA           r   COPY public.categoria (nombre, "isUpdated", "isDeleted", "DateCreation", "DateModification", id, sku) FROM stdin;
    public          postgres    false    223   r/      x          0    16445    cheque 
   TABLE DATA           �   COPY public.cheque (usuario, fecha, cliente, cantidad, "isUpdated", "isDeleted", "DateCreation", "DateModification", id, ticket) FROM stdin;
    public          postgres    false    224   �/      y          0    16450    clientes 
   TABLE DATA           L  COPY public.clientes ("nombreComercial", contacto, telefono, email, vendedor, giro, activo, registro, actualizacion, "isUpdated", "isDeleted", "DateCreation", "DateModification", id, direccion, "whatsApp", "condicionesPago", "listaPrecios", "diasCredito", "limiteCredito", cuenta, "saldoPentiente", "creditoDisponible") FROM stdin;
    public          postgres    false    225   �/      z          0    16455    cobranzaPagosPendientesCobrar 
   TABLE DATA           �   COPY public."cobranzaPagosPendientesCobrar" ("fechaCobro", fecha, cliente, detalle, extension, monto, saldo, "metodoPago", vendedor, estatus, observaciones, "isUpdated", "isDeleted", "DateCreation", "DateModification", id) FROM stdin;
    public          postgres    false    226   �/      �          0    19594    cobranzasDia 
   TABLE DATA           �   COPY public."cobranzasDia" (id, "numeroPedido", fecha, cte, cliente, vendedor, monto, saldo, moneda, "diasVencido", status, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    506   �/      }          0    19464 
   comisiones 
   TABLE DATA           z   COPY public.comisiones (nombre, porcentaje, "isUpdated", "isDeleted", "DateCreation", "DateModification", id) FROM stdin;
    public          postgres    false    485   0      {          0    16465    complementosPafo 
   TABLE DATA           �   COPY public."complementosPafo" (fecha, cliente, "formaPago", total, facturas, pedidos, comentarios, "isUpdated", "isDeleted", "DateCreation", "DateModification", id, folio, serie) FROM stdin;
    public          postgres    false    227    0      |          0    16470    contenedores 
   TABLE DATA           �   COPY public.contenedores (activo, nombre, inicio, fin, "isUpdated", "isDeleted", "DateCreation", "DateModification", id) FROM stdin;
    public          postgres    false    228   =0      }          0    16475    costoProductos 
   TABLE DATA           �   COPY public."costoProductos" (imagen, "codigoEmpresa", nombre, inventario, "costoMN", "totalMN", "isUpdated", "isDeleted", "DateCreation", "DateModification", id) FROM stdin;
    public          postgres    false    229   Z0      ~          0    16480    costosEnvio 
   TABLE DATA           �   COPY public."costosEnvio" (activo, nombre, estado, global, contenedor, costo, "isUpdated", "isDeleted", "DateCreation", "DateModification", id) FROM stdin;
    public          postgres    false    230   w0                0    19479    cotizaciones 
   TABLE DATA           �   COPY public.cotizaciones (folio, fecha, recurrencia, "isUpdated", "isDeleted", "DateCreation", "DateModification", status, "Comentarios", pedido, "idCliente", "idVendedor", neto, descuento, "subTotal", impuestos, total, envio, comentarios) FROM stdin;
    public          postgres    false    487   �0      �          0    19726    customerImages 
   TABLE DATA           C   COPY public."customerImages" (id, "idCliente", imagen) FROM stdin;
    public          postgres    false    514   �0      �          0    19490    datosCliente 
   TABLE DATA           �   COPY public."datosCliente" (id, "numeroCliente", telefono, correo, calle, numero, colonia, postal, rfc, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    490   �0                0    16495    datosPedido 
   TABLE DATA           �   COPY public."datosPedido" ("fechaCotizacion", "fechaPedido", vendedor, moneda, "isUpdated", "isDeleted", "DateCreation", "DateModification", id, folio) FROM stdin;
    public          postgres    false    231   �0      �          0    19626    datosUsuarios 
   TABLE DATA           �   COPY public."datosUsuarios" (id, direccion, colonia, estado, ciudad, "codigoPostal", "telefonoContacto", "telefonoCelular", "isDeleted", "isUpdated", "dateModification", "dateCreation", "idUsuario", status) FROM stdin;
    public          postgres    false    512   1      �          0    16500    datosVendedorClientesAsignados 
   TABLE DATA           �   COPY public."datosVendedorClientesAsignados" (numero, "nombreComercial", "ultimaVisita", "totalVentas", "isUpdated", "isDeleted", "DateCreation", "DateModification", id) FROM stdin;
    public          postgres    false    232   O1      �          0    18183    detallePedido 
   TABLE DATA           �   COPY public."detallePedido" (id, "datosPedido", backorder, "datosEnvio", "informacionCliente", "comentariosPedido", "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    265   l1      �          0    18197    detallesReporteInventario 
   TABLE DATA           �   COPY public."detallesReporteInventario" (id, almacen, ubicacion, cantidad, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    267   �1      �          0    18211    detallesVentas 
   TABLE DATA           �   COPY public."detallesVentas" (id, efectivo, "tarjetaDebito", "tarjetaCredito", cheque, credito, "valesDespensa", transferencia, deposito, "saldoFavor", "notasCredito", total, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    269   �1      �          0    18225 
   dineroCaja 
   TABLE DATA           �   COPY public."dineroCaja" (id, "fondoCaja", efectivo, ventas, bonos, salidas, devoluciones, total, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    271   �1      �          0    18241    entradaSalidaEfectivo 
   TABLE DATA           �   COPY public."entradaSalidaEfectivo" (id, folio, usuario, fecha, comentario, entrada, salida, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    274   �1      �          0    18256    entradasCajaGeneral 
   TABLE DATA           �   COPY public."entradasCajaGeneral" (id, fecha, hora, tipo, cliente, "metodoPago", vendedor, monto, estatus, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    276   �1      �          0    18271    estadosCuenta 
   TABLE DATA           �   COPY public."estadosCuenta" (id, numero, cliente, "razonSocial", rfc, vendedor, "creditoMN", "saldoMN", "disponibleMN", "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    278   2      �          0    18285    estadosCuentaHistorial 
   TABLE DATA           �   COPY public."estadosCuentaHistorial" (id, numero, fecha, detalle, "formaPago", cargo, abono, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    280   72      �          0    17774    estatus 
   TABLE DATA           l   COPY public.estatus (id, estatus, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    234   T2      �          0    18300    facturaGlobal 
   TABLE DATA           �   COPY public."facturaGlobal" (id, folio, fecha, rfc, monto, estatus, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    283   q2      �          0    19747    fichaClienteAccesoWeb 
   TABLE DATA           `   COPY public."fichaClienteAccesoWeb" (id, "idCliente", password, status, validacion) FROM stdin;
    public          postgres    false    518   �2      �          0    18315    fichaClienteContactos 
   TABLE DATA             COPY public."fichaClienteContactos" (id, "nombreContacto", "emailContacto", "comentariosContacto", "ubicacionContacto", "isUpdated", "isDeleted", "DateCreation", "DateModification", "idCliente", "telefonoContacto", "celularContacto", "whatsAppContacto", "puestoContacto") FROM stdin;
    public          postgres    false    285   �2      �          0    18329    fichaClienteDireccionesEnvio 
   TABLE DATA           ,  COPY public."fichaClienteDireccionesEnvio" ("nombreDireccion", colonia, ciudad, estado, id, "isUpdated", "isDeleted", "DateCreation", "DateModification", "apellidoRecibe", "codigoPostal", "idCliente", "nombreRecibe", calle, "numeroExterior", "numeroInterior", "entreCalles", referencias) FROM stdin;
    public          postgres    false    287   �2      �          0    18344    fichaClienteEstadoCuenta 
   TABLE DATA           �   COPY public."fichaClienteEstadoCuenta" (id, fecha, tipo, detalle, cargo, abono, saldo, "isUpdated", "isDeleted", "DateCreation", "DateModification", tc, "idCliente") FROM stdin;
    public          postgres    false    289   �2      �          0    19756 &   fichaClienteFacturacionDireccionFiscal 
   TABLE DATA           �   COPY public."fichaClienteFacturacionDireccionFiscal" (id, "idCliente", calle, colonia, estado, email, "numeroExterior", "numeroInterior", ciudad, "codigoPostal") FROM stdin;
    public          postgres    false    520   3      �          0    18358     fichaClienteFacturacionGenerales 
   TABLE DATA           �   COPY public."fichaClienteFacturacionGenerales" (id, "metodoPago", "usoCFDI", "isUpdated", "isDeleted", "DateCreation", "DateModification", "idCliente", rfc, "razonSocial", predeterminado, capital, "regimenFiscal", "formaPago") FROM stdin;
    public          postgres    false    291   3      �          0    18372 )   foliosSurtidoBitacoraRecepcionesMercancia 
   TABLE DATA           �   COPY public."foliosSurtidoBitacoraRecepcionesMercancia" (id, fecha, almacen, producto, cantidad, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    293   <3      �          0    18386    formasPagoPedido 
   TABLE DATA           �   COPY public."formasPagoPedido" (id, fecha, "formaPago", "cantidadPago", total, "faltaPagar", "tipoCambio", tc, "cantidadPagada", "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    295   Y3      �          0    18401 	   historial 
   TABLE DATA           �   COPY public.historial (id, tipo, comentarios, neto, descuento, "subTotal", impuestos, total, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    297   v3      �          0    18418    historialProducto 
   TABLE DATA           �   COPY public."historialProducto" (id, "codigoFabricante", "codigoEmpresa", estufa, marca, minimo, maximo, sucursal, almacen, entradas, salidas, existencia, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    301   �3      �          0    18435    historialProductoUltimasCompras 
   TABLE DATA           �   COPY public."historialProductoUltimasCompras" (id, "numeroOrdenCompra", fecha, cantidad, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    304   �3      �          0    18449    historialProductoUltimasVentas 
   TABLE DATA           �   COPY public."historialProductoUltimasVentas" (id, "numeroPedido", fecha, cantidad, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    307   �3      �          0    18462    impuestosSistema 
   TABLE DATA           �   COPY public."impuestosSistema" (id, nombre, valor, clientes, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    309   �3      �          0    18478 (   inventarioAlmacenReporteInventarioBodega 
   TABLE DATA           �   COPY public."inventarioAlmacenReporteInventarioBodega" (id, imagen, "codigoFabrica", "codigoEmpresa", nombre, marca, existencia, ubicacion, minimo, maximo, reorden, lotes, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    313   4      �          0    18494    inventarioGeneralDetalles 
   TABLE DATA           �   COPY public."inventarioGeneralDetalles" (id, almacen, ubicacion, cantidad, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    315   $4      �          0    18510 "   inventarioGeneralReporteInventario 
   TABLE DATA           �   COPY public."inventarioGeneralReporteInventario" (id, imagen, "codigoFabrica", "codigoEmpresa", nombre, marca, minimo, maximo, total, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    319   A4      �          0    18527    inventarioGeneralTarjetaAlmacen 
   TABLE DATA           �   COPY public."inventarioGeneralTarjetaAlmacen" (id, folio, hora, fecha, pedido, movimiento, entrada, salida, inventario, "mostrarMovimientosCancelados", "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    322   ^4      �          0    18544 #   inventarioXAlmacenReporteInventario 
   TABLE DATA           �   COPY public."inventarioXAlmacenReporteInventario" (id, imagen, "codigoEmpresa", "codigoFabricante", nombre, marca, existencia, ubicacion, minimo, maximo, reorden, lotes, "isUpdate", "isDelete", "creationDate", "creationUpdate") FROM stdin;
    public          postgres    false    326   {4      x          0    19434    listadoClientes 
   TABLE DATA             COPY public."listadoClientes" (id, "numeroCliente", "numeroComercial", "razonSocial", contacto, rfc, telefono, email, vendedor, giro, activo, registro, actualizado, "isUpdate", "isDelete", "creationDate", "creationUpdate", "nombreComercial", "nombreCliente") FROM stdin;
    public          postgres    false    480   �4      �          0    18577    listadoComisiones 
   TABLE DATA           �   COPY public."listadoComisiones" (id, nombre, porcentaje, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    328   �4      �          0    18593    listadoEntradas 
   TABLE DATA           �   COPY public."listadoEntradas" (id, folio, fecha, "codigoEmpresa", producto, cantidad, "sucursalAlmacen", tipo, motivo, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    332   �4      �          0    19617    listadoFormasPago 
   TABLE DATA           �   COPY public."listadoFormasPago" (id, "nombreForma", "%comision", "claveSAT", "isUpdated", "isDelated", "dateModication", "dateCreation") FROM stdin;
    public          postgres    false    510   �4      �          0    19603    listadoPrecios 
   TABLE DATA           �   COPY public."listadoPrecios" (id, fecha, nombre, variacion, clientes, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    508   5      �          0    18611    listadoProductos 
   TABLE DATA           �   COPY public."listadoProductos" (imagen, id, "codigoFabricante", "codigoEmpresa", nombre, marca, categoria, "codigoSat", actualizado, activo, web, pos, venta, precio, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    336   )5      �          0    18628    listadoProductosDescuento 
   TABLE DATA           �   COPY public."listadoProductosDescuento" (id, imagen, "codigoEmpresa", nombre, desde, hasta, "precioBase", descuento, precio, activo, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    339   F5      �          0    18645    listadoProductosMargenProductos 
   TABLE DATA             COPY public."listadoProductosMargenProductos" (id, imagen, "codigoFabricante", "codigoEmpresa", nombre, activo, "precioBaseMN", "descuentoMN", "precioMN", "costoMN", "diferenciaMN", margen, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    343   c5      �          0    18662    listadoSalida 
   TABLE DATA           �   COPY public."listadoSalida" (id, folio, fecha, "codigoEmpresa", producto, cantidad, "sucursalAlmacen", tipo, motivo, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    346   �5      �          0    18678    listadoTransferencia 
   TABLE DATA           �   COPY public."listadoTransferencia" (id, folio, fecha, usuario, "deSucursal", "delAlmmacen", "aSucursal", "alAlmacen", productos, estatus, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    349   �5      �          0    18693 /   listadoTransferenciaMasivaDetallesTransferencia 
   TABLE DATA           �   COPY public."listadoTransferenciaMasivaDetallesTransferencia" (id, fecha, "sucursalSurte", "sucursalRecibe", estatus, "almacenSurte", "almacenRecibe", comentarios, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    351   �5      �          0    18708 2   listadoTransferenciasMasivasProductosTransferencia 
   TABLE DATA           �   COPY public."listadoTransferenciasMasivasProductosTransferencia" (id, codigo, imagen, nombre, cantidad, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    354   �5      �          0    18725 +   listadoTransferenciasMasvasArchivosAdjuntos 
   TABLE DATA           �   COPY public."listadoTransferenciasMasvasArchivosAdjuntos" (id, numero, archivo, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    357   �5      �          0    18740    listadoVendedores 
   TABLE DATA           �   COPY public."listadoVendedores" (id, imagen, nombre, telefono, sucursal, "fechaAlta", "referenciaWeb", clientes, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    359   6                0    18755    logistcaPedidos 
   TABLE DATA           �   COPY public."logistcaPedidos" (id, "folio ", "fechaVenta", cliente, monto, "fechaCompromiso", turno, chofer, direccion, "fechaEntrega", estatus, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    362   .6      �          0    19811    marcasImages 
   TABLE DATA           ?   COPY public."marcasImages" (id, "idMarca", imagen) FROM stdin;
    public          postgres    false    522   K6      �          0    19818    marcasProducto 
   TABLE DATA           �   COPY public."marcasProducto" (id, marca, catalogo, productos, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    523   h6                0    18780 #   margenVentasReporteUtilidadesVentas 
   TABLE DATA           �   COPY public."margenVentasReporteUtilidadesVentas" (id, folio, fecha, cliente, vendedor, prods, "subVentaMN", "subCostoMN", "deficienteMN", margen, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    365   �6                0    18851    mercadosListadoGiros 
   TABLE DATA           �   COPY public."mercadosListadoGiros" (id, nombre, clientes, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    377   �6                0    18860    monedasSistema 
   TABLE DATA           �   COPY public."monedasSistema" (id, fecha, hora, abreviatura, contra, valor, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    379   �6                0    18795    motivosEntrada 
   TABLE DATA           {   COPY public."motivosEntrada" (id, motivo, clase, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    367   �6      	          0    18809    motivosSalida 
   TABLE DATA           z   COPY public."motivosSalida" (id, motivo, clase, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    369   �6                0    18825    notasCredito 
   TABLE DATA           �   COPY public."notasCredito" (id, serie, folio, fecha, clientes, detalles, "formasPago", relacion, tipo, motivo, subtotal, impuesto, iva, total, aplicada, cancelada, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    373   7                0    18842    notificacion 
   TABLE DATA           �   COPY public.notificacion (id, comentario, "aTabla", leido, actuzalizado, eliminado, estatus, "idEntrada", "idSalida", "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    375   37      �          0    19529    nuevaCotizacion 
   TABLE DATA           �   COPY public."nuevaCotizacion" (id, imagen, codigo, nombre, marca, cantidad, inventario, "precioUnitario", descuento, "subTotal", impuestos, total) FROM stdin;
    public          postgres    false    497   P7                0    18870    nuevaOrdenCompraFoliosSurtido 
   TABLE DATA           �   COPY public."nuevaOrdenCompraFoliosSurtido" (id, fecha, almacen, producto, cantidad, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    381   m7                0    18883 #   nuevasOrdenesCompraArchivosAdjuntos 
   TABLE DATA           �   COPY public."nuevasOrdenesCompraArchivosAdjuntos" (id, numero, archivo, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    384   �7                0    18899    ordenCompraArchivosAdjuntos 
   TABLE DATA           �   COPY public."ordenCompraArchivosAdjuntos" (id, numero, archvio, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    387   �7                0    18914    ordenCompraFoliosSurtido 
   TABLE DATA           �   COPY public."ordenCompraFoliosSurtido" (id, numero, fecha, almacen, producto, cantidad, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    390   �7      !          0    18928    ordenesCompraListadoEntradas 
   TABLE DATA           �   COPY public."ordenesCompraListadoEntradas" (id, folio, "fechaRegistrada", "fechaCompra", "fechaEntrega", provedor, vendedor, referencia, total, productos, "isUpdated", "isDeleted", "DateCreation", "DateModification", status) FROM stdin;
    public          postgres    false    393   �7      �          0    19546    pagos 
   TABLE DATA           �   COPY public.pagos (id, folio, status, status2, fecha, tipo, cliente, detalle, "maneraPago", vendedor, monto, "isUpdated", "isDeleted", "dateCreation", "dateModification") FROM stdin;
    public          postgres    false    500   �7      �          0    17784    pedido 
   TABLE DATA           �   COPY public.pedido (idpedido, "datosPedido", "datosEnvio", "informacionCliente", "productosPedido", "formaPago", comentarios, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    236   8      $          0    18944    pedidos 
   TABLE DATA           �   COPY public.pedidos (id, folio, fecha, cotizacion, "numeroCliente", cliente, "razonSocial", rfc, monto, saldo, factura, surtido, poductos, "isUpdated", "isDeleted", "DateCreation", "DateModification", status, entrega) FROM stdin;
    public          postgres    false    396   88      '          0    18955    pedidosPendientesSurtir 
   TABLE DATA           �   COPY public."pedidosPendientesSurtir" (id, folio, fecha, cliente, monto, estatus, factura, surtido, parcial, "isUpdated", "isDeleted", "DateCreation", "DateModification", vendedor) FROM stdin;
    public          postgres    false    399   U8      �          0    17806 	   productos 
   TABLE DATA           �   COPY public.productos (idproducto, imagen, "codigoEmpresa", "codigoFabricante", nombre, marca, categoria, existencia, "backOrder", cantidad, precio, descuento, total, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    240   r8      )          0    18967    productosCotizados 
   TABLE DATA           �   COPY public."productosCotizados" (id, "isUpdated", "isDeleted", "DateCreation", "DateModification", "idProducto", "idCotizacion", active) FROM stdin;
    public          postgres    false    401   �8      +          0    18982    productosLaOrdenCompra 
   TABLE DATA           �   COPY public."productosLaOrdenCompra" (id, imagen, codigo, producto, cantidad, costo, descuento, total, subtotal, impuestos, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    403   �8      -          0    18996    productosPedido 
   TABLE DATA           �   COPY public."productosPedido" (id, imagen, codigo, nombre, cantidad, "unitarioMN", "descuentoMN", total, devolucion, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    405   �8      /          0    19010    productosRelacionados 
   TABLE DATA           �   COPY public."productosRelacionados" (id, imagen, codigo, nombre, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    407   �8      1          0    19024    productosSurtidosPedido 
   TABLE DATA           �   COPY public."productosSurtidosPedido" (id, imagen, codigo, nombre, cantidad, fecha, almacen, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    409   9      3          0    19039    productosSurtirPedido 
   TABLE DATA           �   COPY public."productosSurtirPedido" (id, codigo, nombre, cantidad, faltan, surtir, disponibles, series, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    411    9      5          0    19053    productosTransferencia 
   TABLE DATA           �   COPY public."productosTransferencia" (id, codigo, imagen, nombre, cantidad, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    413   =9      7          0    19067 
   provedores 
   TABLE DATA           �   COPY public.provedores (id, nombre, "razonSocial", rfc, ciudad, estado, pais, productos, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    415   Z9      9          0    19081    provedoresProducto 
   TABLE DATA           �   COPY public."provedoresProducto" (id, "nombreProvedor", "unidadesCompradas", "ultimaCompra", "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    417   w9      <          0    19097    recordPorProducto 
   TABLE DATA           �   COPY public."recordPorProducto" (id, fecha, "idProducto", clave, producto, provedor, cantidad, monto, "tipoCambio", total, "0C", "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    420   �9      ?          0    19113    recordProducto 
   TABLE DATA           �   COPY public."recordProducto" (id, fecha, pedido, "idProducto", clave, producto, cliente, vendedor, cantidad, monto, total, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    423   �9      �          0    19573    refreshTokens 
   TABLE DATA           =   COPY public."refreshTokens" (id, "refreshToken") FROM stdin;
    public          postgres    false    503   �9      A          0    19128    reporteCobranza 
   TABLE DATA           �   COPY public."reporteCobranza" (id, pedido, cliente, vendedor, "formaPago", monto, moneda, comp, total, pagado, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    425   �9      D          0    19143    reporteComisiones 
   TABLE DATA           �   COPY public."reporteComisiones" (id, fecha, folio, cliente, vendedor, importe, tc, moneda, comision, "%comision", "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    428   :      G          0    19159    reporteFacturas 
   TABLE DATA           �   COPY public."reporteFacturas" (id, folio, pedido, fecha, cliente, vendedor, "formaPago", subtotal, iva, total, moneda, informacion, nc, cp, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    431   %:      K          0    19171    reporteInventario 
   TABLE DATA           �   COPY public."reporteInventario" (id, imagen, "codigoFabrica", "codigoEmpresa", nombre, marca, minimo, maximo, total, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    435   B:      {          0    19445    reporteVentas 
   TABLE DATA           �   COPY public."reporteVentas" (id, fecha, folio, cliente, sucursal, vendedor, monto, "totalPesos", "totalDolares", "acumuladoPesos", "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    483   _:      M          0    19187    reporteVentasClienfe 
   TABLE DATA           �   COPY public."reporteVentasClienfe" (id, cliente, "numeroVenta", fecha, vendedor, monto, total, "numeroCliente", "tipoCambio", "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    437   |:      O          0    19202 #   sucursalesAlmacenesListadoProductos 
   TABLE DATA           �   COPY public."sucursalesAlmacenesListadoProductos" (id, nombre, ciudad, estado, telefono, gerente, almacenes, web, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    439   �:      �          0    19825    sucursalesDatos 
   TABLE DATA             COPY public."sucursalesDatos" ("nombreCorto", direccion, colonia, "codigoPostal", "emailSucursal", rfc, "geoUrlMaps", "limiteCredito", "encabezadoPos", "notaEnviosPos", "notaTicketPos", "isUpdated", "isDeleted", "DateCreation", "DateModification", id) FROM stdin;
    public          postgres    false    524   �:      Q          0    19216    surtir 
   TABLE DATA           �   COPY public.surtir (id, "datosCliente", "surtirDesdeAlmacen", "comentariosPedido", "productosSurtir", "productosSurtidos", "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    441   �:      T          0    19231    tarjetaCredito 
   TABLE DATA           �   COPY public."tarjetaCredito" (id, ticket, usuario, fecha, cliente, cantidad, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    444   �:      W          0    19247    tarjetaDebito 
   TABLE DATA           �   COPY public."tarjetaDebito" (id, ticket, usuario, fecha, cliente, cantidad, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    447   ;      ]          0    19274    ticket 
   TABLE DATA           �   COPY public.ticket (id, ticket, imagen, codigo, nombre, cantidad, precio, descuento, total, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    453   *;      Z          0    19263    tickets 
   TABLE DATA           �   COPY public.tickets (id, cliente, rfc, "codigoPostal", productos, vendedor, imagen, total, ticket, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    450   G;      _          0    19295    tiposEnvioGastosEnvio 
   TABLE DATA           �   COPY public."tiposEnvioGastosEnvio" (id, activo, costo1, costo2, costo3, "isUpdated", "isDeleted", "DateCreation", "DateModification", "tipoEnvio") FROM stdin;
    public          postgres    false    455   d;      f          0    19325 '   transferenciaAlmacenesListadoIndividual 
   TABLE DATA           �   COPY public."transferenciaAlmacenesListadoIndividual" (id, folio, fecha, "codigoEmpresa", nombre, cantidad, "deSucursal", "delAlmacen", "aSucursal", "alAlmacen", "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    462   �;      b          0    19308    transferenciaIndividualArchivos 
   TABLE DATA           �   COPY public."transferenciaIndividualArchivos" (id, numero, archivo, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    458   �;      h          0    19341    transferenciaIndividualDetalles 
   TABLE DATA           �   COPY public."transferenciaIndividualDetalles" (id, fecha, "sucursalSurte", "sucursalRecibe", "almacenSurte", "almacenRecibe", "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    464   �;      k          0    19356    ubicacionTarjetaAlmacen 
   TABLE DATA           �   COPY public."ubicacionTarjetaAlmacen" (id, folio, fecha, pedido, "0C", movimiento, entrada, salida, inventario, "mostrarMovimientosCancelados", "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    467   �;      �          0    19561    usuarios 
   TABLE DATA           �   COPY public.usuarios (id, nombre, apellido, email, password, "perfilSeguridad", "vendedorId", "isDeleted", "isUpdated", "creationDate", "updatedDate", "isActive", "accessToken", imagen, grupo, vendedor) FROM stdin;
    public          postgres    false    501   �;      m          0    19372 
   vendedores 
   TABLE DATA           �   COPY public.vendedores (id, nombre, telefono, sucursal, "fechaAlta", "referenciaWeb", clientes, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    469   '`      �          0    19735    vendedoresImages 
   TABLE DATA           F   COPY public."vendedoresImages" (id, "idVendedor", imagen) FROM stdin;
    public          postgres    false    516   D`      p          0    19387    ventasEfectivo 
   TABLE DATA           �   COPY public."ventasEfectivo" (id, ticket, usuario, fecha, cliente, importe, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    472   a`      s          0    19403    ventasRealizadas 
   TABLE DATA           �   COPY public."ventasRealizadas" (id, ticket, "fechaHora", cliente, estatus, factura, monto, "isUpdated", "isDeleted", "DateCreation", "DateModification") FROM stdin;
    public          postgres    false    475   ~`      u          0    19418 	   verPedido 
   TABLE DATA           �   COPY public."verPedido" (id, "datosPedido", "datosEnvio", "informacionCliente", "isUpdate", "isDelete", "creationDate", "creationUpdate") FROM stdin;
    public          postgres    false    477   �`      g           0    0    abonoAplicadoEfectivo_id_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public."abonoAplicadoEfectivo_id_seq"', 1, false);
          public          postgres    false    241            h           0    0    abonosAplicados_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."abonosAplicados_id_seq"', 1, false);
          public          postgres    false    242            i           0    0    abonosCancelados_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."abonosCancelados_id_seq"', 1, false);
          public          postgres    false    243            j           0    0 ,   agregarProductoCotizacion_codigoEmpresaa_seq    SEQUENCE SET     ]   SELECT pg_catalog.setval('public."agregarProductoCotizacion_codigoEmpresaa_seq"', 1, false);
          public          postgres    false    492            k           0    0 .   agregarProductoCotizacion_codigoFabricante_seq    SEQUENCE SET     _   SELECT pg_catalog.setval('public."agregarProductoCotizacion_codigoFabricante_seq"', 1, false);
          public          postgres    false    493            l           0    0     agregarProductoCotizacion_id_seq    SEQUENCE SET     Q   SELECT pg_catalog.setval('public."agregarProductoCotizacion_id_seq"', 1, false);
          public          postgres    false    491            m           0    0 !   agregarProductoRelacionado_id_seq    SEQUENCE SET     Q   SELECT pg_catalog.setval('public."agregarProductoRelacionado_id_seq"', 4, true);
          public          postgres    false    244            n           0    0    agregarProvedor_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."agregarProvedor_id_seq"', 1, false);
          public          postgres    false    245            o           0    0    almacenSucursal_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."almacenSucursal_id_seq"', 1, false);
          public          postgres    false    246            p           0    0 .   archivosAdjuntosListadoArchivosAdjuntos_id_seq    SEQUENCE SET     _   SELECT pg_catalog.setval('public."archivosAdjuntosListadoArchivosAdjuntos_id_seq"', 1, false);
          public          postgres    false    247            q           0    0    buscarProducto_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."buscarProducto_id_seq"', 1, true);
          public          postgres    false    248            r           0    0    busquedaReportes_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."busquedaReportes_id_seq"', 1, false);
          public          postgres    false    249            s           0    0    categoria_sku_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.categoria_sku_seq', 26, true);
          public          postgres    false    250            t           0    0    cheque_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.cheque_id_seq', 1, false);
          public          postgres    false    251            u           0    0    cheque_ticket_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.cheque_ticket_seq', 1, false);
          public          postgres    false    252            v           0    0    clientes_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.clientes_id_seq', 1, false);
          public          postgres    false    253            w           0    0 $   cobranzaPagosPendientesCobrar_id_seq    SEQUENCE SET     U   SELECT pg_catalog.setval('public."cobranzaPagosPendientesCobrar_id_seq"', 1, false);
          public          postgres    false    254            x           0    0    cobranzasDia_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public."cobranzasDia_id_seq"', 1, false);
          public          postgres    false    505            y           0    0    comisiones_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.comisiones_id_seq', 1, false);
          public          postgres    false    484            z           0    0    complementosPafo_folio_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public."complementosPafo_folio_seq"', 1, false);
          public          postgres    false    256            {           0    0    complementosPafo_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."complementosPafo_id_seq"', 1, false);
          public          postgres    false    255            |           0    0    complementosPafo_serie_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public."complementosPafo_serie_seq"', 1, false);
          public          postgres    false    257            }           0    0    contenedores_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.contenedores_id_seq', 1, false);
          public          postgres    false    258            ~           0    0    costoProductos_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."costoProductos_id_seq"', 1, true);
          public          postgres    false    259                       0    0    costosEnvio_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."costosEnvio_id_seq"', 1, false);
          public          postgres    false    260            �           0    0    cotizaciones_folio_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.cotizaciones_folio_seq', 1, false);
          public          postgres    false    486            �           0    0    cotizaciones_pedido_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.cotizaciones_pedido_seq', 13, true);
          public          postgres    false    521            �           0    0    customerImages_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."customerImages_id_seq"', 1, false);
          public          postgres    false    513            �           0    0    datosCliente_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public."datosCliente_id_seq"', 1, false);
          public          postgres    false    488            �           0    0    datosCliente_numeroCliente_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public."datosCliente_numeroCliente_seq"', 1, false);
          public          postgres    false    489            �           0    0    datosPedido_folio_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."datosPedido_folio_seq"', 1, false);
          public          postgres    false    262            �           0    0    datosPedido_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."datosPedido_id_seq"', 1, false);
          public          postgres    false    261            �           0    0    datosUsuarios_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."datosUsuarios_id_seq"', 71, true);
          public          postgres    false    511            �           0    0 %   datosVendedorClientesAsignados_id_seq    SEQUENCE SET     V   SELECT pg_catalog.setval('public."datosVendedorClientesAsignados_id_seq"', 1, false);
          public          postgres    false    263            �           0    0    detallePedido_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."detallePedido_id_seq"', 1, false);
          public          postgres    false    264            �           0    0     detallesReporteInventario_id_seq    SEQUENCE SET     Q   SELECT pg_catalog.setval('public."detallesReporteInventario_id_seq"', 1, false);
          public          postgres    false    266            �           0    0    detallesVentas_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."detallesVentas_id_seq"', 1, false);
          public          postgres    false    268            �           0    0    dineroCaja_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."dineroCaja_id_seq"', 1, false);
          public          postgres    false    270            �           0    0    entradaSalidaEfectivo_folio_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('public."entradaSalidaEfectivo_folio_seq"', 1, false);
          public          postgres    false    273            �           0    0    entradaSalidaEfectivo_id_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public."entradaSalidaEfectivo_id_seq"', 1, false);
          public          postgres    false    272            �           0    0    entradasCajaGeneral_id_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public."entradasCajaGeneral_id_seq"', 1, false);
          public          postgres    false    275            �           0    0    estadosCuentaHistorial_id_seq    SEQUENCE SET     N   SELECT pg_catalog.setval('public."estadosCuentaHistorial_id_seq"', 1, false);
          public          postgres    false    279            �           0    0    estadosCuenta_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."estadosCuenta_id_seq"', 1, false);
          public          postgres    false    277            �           0    0    facturaGlobal_folio_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."facturaGlobal_folio_seq"', 1, false);
          public          postgres    false    282            �           0    0    facturaGlobal_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."facturaGlobal_id_seq"', 1, false);
          public          postgres    false    281            �           0    0    fichaClienteAccesoWeb_id_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public."fichaClienteAccesoWeb_id_seq"', 1, false);
          public          postgres    false    517            �           0    0    fichaClienteContactos_id_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public."fichaClienteContactos_id_seq"', 1, false);
          public          postgres    false    284            �           0    0 #   fichaClienteDireccionesEnvio_id_seq    SEQUENCE SET     T   SELECT pg_catalog.setval('public."fichaClienteDireccionesEnvio_id_seq"', 1, false);
          public          postgres    false    286            �           0    0    fichaClienteEstadoCuenta_id_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('public."fichaClienteEstadoCuenta_id_seq"', 1, false);
          public          postgres    false    288            �           0    0 -   fichaClienteFacturacionDireccionFiscal_id_seq    SEQUENCE SET     ^   SELECT pg_catalog.setval('public."fichaClienteFacturacionDireccionFiscal_id_seq"', 1, false);
          public          postgres    false    519            �           0    0    fichaClienteFacturacion_id_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public."fichaClienteFacturacion_id_seq"', 1, false);
          public          postgres    false    290            �           0    0 0   foliosSurtidoBitacoraRecepcionesMercancia_id_seq    SEQUENCE SET     a   SELECT pg_catalog.setval('public."foliosSurtidoBitacoraRecepcionesMercancia_id_seq"', 1, false);
          public          postgres    false    292            �           0    0    formasPagoPedido_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."formasPagoPedido_id_seq"', 1, false);
          public          postgres    false    294            �           0    0 &   historialProductoUltimasCompras_id_seq    SEQUENCE SET     W   SELECT pg_catalog.setval('public."historialProductoUltimasCompras_id_seq"', 1, false);
          public          postgres    false    302            �           0    0 5   historialProductoUltimasCompras_numeroOrdenCompra_seq    SEQUENCE SET     f   SELECT pg_catalog.setval('public."historialProductoUltimasCompras_numeroOrdenCompra_seq"', 1, false);
          public          postgres    false    303            �           0    0 %   historialProductoUltimasVentas_id_seq    SEQUENCE SET     V   SELECT pg_catalog.setval('public."historialProductoUltimasVentas_id_seq"', 1, false);
          public          postgres    false    305            �           0    0 /   historialProductoUltimasVentas_numeroPedido_seq    SEQUENCE SET     `   SELECT pg_catalog.setval('public."historialProductoUltimasVentas_numeroPedido_seq"', 1, false);
          public          postgres    false    306            �           0    0 #   historialProducto_codigoEmpresa_seq    SEQUENCE SET     T   SELECT pg_catalog.setval('public."historialProducto_codigoEmpresa_seq"', 1, false);
          public          postgres    false    300            �           0    0 &   historialProducto_codigoFabricante_seq    SEQUENCE SET     W   SELECT pg_catalog.setval('public."historialProducto_codigoFabricante_seq"', 1, false);
          public          postgres    false    299            �           0    0    historialProducto_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."historialProducto_id_seq"', 1, false);
          public          postgres    false    298            �           0    0    historial_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.historial_id_seq', 1, false);
          public          postgres    false    296            �           0    0    impuestosSistema_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."impuestosSistema_id_seq"', 1, false);
          public          postgres    false    308            �           0    0 :   inventarioAlmacenReporteInventarioBodega_codigoEmpresa_seq    SEQUENCE SET     k   SELECT pg_catalog.setval('public."inventarioAlmacenReporteInventarioBodega_codigoEmpresa_seq"', 1, false);
          public          postgres    false    312            �           0    0 :   inventarioAlmacenReporteInventarioBodega_codigoFabrica_seq    SEQUENCE SET     k   SELECT pg_catalog.setval('public."inventarioAlmacenReporteInventarioBodega_codigoFabrica_seq"', 1, false);
          public          postgres    false    311            �           0    0 /   inventarioAlmacenReporteInventarioBodega_id_seq    SEQUENCE SET     `   SELECT pg_catalog.setval('public."inventarioAlmacenReporteInventarioBodega_id_seq"', 1, false);
          public          postgres    false    310            �           0    0     inventarioGeneralDetalles_id_seq    SEQUENCE SET     Q   SELECT pg_catalog.setval('public."inventarioGeneralDetalles_id_seq"', 1, false);
          public          postgres    false    314            �           0    0 4   inventarioGeneralReporteInventario_codigoEmpresa_seq    SEQUENCE SET     e   SELECT pg_catalog.setval('public."inventarioGeneralReporteInventario_codigoEmpresa_seq"', 1, false);
          public          postgres    false    318            �           0    0 4   inventarioGeneralReporteInventario_codigoFabrica_seq    SEQUENCE SET     e   SELECT pg_catalog.setval('public."inventarioGeneralReporteInventario_codigoFabrica_seq"', 1, false);
          public          postgres    false    317            �           0    0 )   inventarioGeneralReporteInventario_id_seq    SEQUENCE SET     Z   SELECT pg_catalog.setval('public."inventarioGeneralReporteInventario_id_seq"', 1, false);
          public          postgres    false    316            �           0    0 )   inventarioGeneralTarjetaAlmacen_folio_seq    SEQUENCE SET     Z   SELECT pg_catalog.setval('public."inventarioGeneralTarjetaAlmacen_folio_seq"', 1, false);
          public          postgres    false    321            �           0    0 &   inventarioGeneralTarjetaAlmacen_id_seq    SEQUENCE SET     W   SELECT pg_catalog.setval('public."inventarioGeneralTarjetaAlmacen_id_seq"', 1, false);
          public          postgres    false    320            �           0    0 5   inventarioXAlmacenReporteInventario_codigoEmpresa_seq    SEQUENCE SET     f   SELECT pg_catalog.setval('public."inventarioXAlmacenReporteInventario_codigoEmpresa_seq"', 1, false);
          public          postgres    false    324            �           0    0 8   inventarioXAlmacenReporteInventario_codigoFabricante_seq    SEQUENCE SET     i   SELECT pg_catalog.setval('public."inventarioXAlmacenReporteInventario_codigoFabricante_seq"', 1, false);
          public          postgres    false    325            �           0    0 *   inventarioXAlmacenReporteInventario_id_seq    SEQUENCE SET     [   SELECT pg_catalog.setval('public."inventarioXAlmacenReporteInventario_id_seq"', 1, false);
          public          postgres    false    323            �           0    0    listadoClientes_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."listadoClientes_id_seq"', 54, true);
          public          postgres    false    478            �           0    0 !   listadoClientes_numeroCliente_seq    SEQUENCE SET     R   SELECT pg_catalog.setval('public."listadoClientes_numeroCliente_seq"', 1, false);
          public          postgres    false    479            �           0    0    listadoComisiones_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."listadoComisiones_id_seq"', 1, false);
          public          postgres    false    327            �           0    0 !   listadoEntradas_codigoEmpresa_seq    SEQUENCE SET     R   SELECT pg_catalog.setval('public."listadoEntradas_codigoEmpresa_seq"', 1, false);
          public          postgres    false    331            �           0    0    listadoEntradas_folio_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public."listadoEntradas_folio_seq"', 1, false);
          public          postgres    false    330            �           0    0    listadoEntradas_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."listadoEntradas_id_seq"', 1, false);
          public          postgres    false    329            �           0    0    listadoFormasPago_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."listadoFormasPago_id_seq"', 1, false);
          public          postgres    false    509            �           0    0    listadoPrecios_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."listadoPrecios_id_seq"', 1, false);
          public          postgres    false    507            �           0    0 +   listadoProductosDescuento_codigoEmpresa_seq    SEQUENCE SET     \   SELECT pg_catalog.setval('public."listadoProductosDescuento_codigoEmpresa_seq"', 1, false);
          public          postgres    false    338            �           0    0     listadoProductosDescuento_id_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('public."listadoProductosDescuento_id_seq"', 1, true);
          public          postgres    false    337            �           0    0 1   listadoProductosMargenProductos_codigoEmpresa_seq    SEQUENCE SET     b   SELECT pg_catalog.setval('public."listadoProductosMargenProductos_codigoEmpresa_seq"', 1, false);
          public          postgres    false    342            �           0    0 4   listadoProductosMargenProductos_codigoFabricante_seq    SEQUENCE SET     e   SELECT pg_catalog.setval('public."listadoProductosMargenProductos_codigoFabricante_seq"', 1, false);
          public          postgres    false    341            �           0    0 &   listadoProductosMargenProductos_id_seq    SEQUENCE SET     W   SELECT pg_catalog.setval('public."listadoProductosMargenProductos_id_seq"', 1, false);
          public          postgres    false    340            �           0    0 "   listadoProductos_codigoEmpresa_seq    SEQUENCE SET     R   SELECT pg_catalog.setval('public."listadoProductos_codigoEmpresa_seq"', 3, true);
          public          postgres    false    335            �           0    0 %   listadoProductos_codigoFabricante_seq    SEQUENCE SET     U   SELECT pg_catalog.setval('public."listadoProductos_codigoFabricante_seq"', 3, true);
          public          postgres    false    334            �           0    0    listadoProductos_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."listadoProductos_id_seq"', 5, true);
          public          postgres    false    333            �           0    0    listadoSalida_folio_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."listadoSalida_folio_seq"', 1, true);
          public          postgres    false    345            �           0    0    listadoSalida_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public."listadoSalida_id_seq"', 1, true);
          public          postgres    false    344            �           0    0 6   listadoTransferenciaMasivaDetallesTransferencia_id_seq    SEQUENCE SET     g   SELECT pg_catalog.setval('public."listadoTransferenciaMasivaDetallesTransferencia_id_seq"', 1, false);
          public          postgres    false    350            �           0    0    listadoTransferencia_folio_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public."listadoTransferencia_folio_seq"', 1, false);
          public          postgres    false    348            �           0    0    listadoTransferencia_id_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public."listadoTransferencia_id_seq"', 1, false);
          public          postgres    false    347            �           0    0 =   listadoTransferenciasMasivasProductosTransferencia_codigo_seq    SEQUENCE SET     n   SELECT pg_catalog.setval('public."listadoTransferenciasMasivasProductosTransferencia_codigo_seq"', 1, false);
          public          postgres    false    353            �           0    0 9   listadoTransferenciasMasivasProductosTransferencia_id_seq    SEQUENCE SET     j   SELECT pg_catalog.setval('public."listadoTransferenciasMasivasProductosTransferencia_id_seq"', 1, false);
          public          postgres    false    352            �           0    0 2   listadoTransferenciasMasvasArchivosAdjuntos_id_seq    SEQUENCE SET     c   SELECT pg_catalog.setval('public."listadoTransferenciasMasvasArchivosAdjuntos_id_seq"', 1, false);
          public          postgres    false    355            �           0    0 6   listadoTransferenciasMasvasArchivosAdjuntos_numero_seq    SEQUENCE SET     g   SELECT pg_catalog.setval('public."listadoTransferenciasMasvasArchivosAdjuntos_numero_seq"', 1, false);
          public          postgres    false    356            �           0    0    listadoVendedores_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."listadoVendedores_id_seq"', 2, true);
          public          postgres    false    358            �           0    0    logistcaPedidos_folio _seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public."logistcaPedidos_folio _seq"', 1, false);
          public          postgres    false    361            �           0    0    logistcaPedidos_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."logistcaPedidos_id_seq"', 1, false);
          public          postgres    false    360            �           0    0 -   margenVentasReporteUtilidadesVentas_folio_seq    SEQUENCE SET     ^   SELECT pg_catalog.setval('public."margenVentasReporteUtilidadesVentas_folio_seq"', 1, false);
          public          postgres    false    364            �           0    0 *   margenVentasReporteUtilidadesVentas_id_seq    SEQUENCE SET     [   SELECT pg_catalog.setval('public."margenVentasReporteUtilidadesVentas_id_seq"', 1, false);
          public          postgres    false    363            �           0    0    mercadosListadoGiros_id_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public."mercadosListadoGiros_id_seq"', 1, false);
          public          postgres    false    376            �           0    0    monedasSistema_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."monedasSistema_id_seq"', 1, false);
          public          postgres    false    378            �           0    0    motivosEntrada_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."motivosEntrada_id_seq"', 1, false);
          public          postgres    false    366            �           0    0    motivosSalida_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."motivosSalida_id_seq"', 1, false);
          public          postgres    false    368            �           0    0    notasCredito_folio_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."notasCredito_folio_seq"', 1, false);
          public          postgres    false    372            �           0    0    notasCredito_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public."notasCredito_id_seq"', 1, false);
          public          postgres    false    370            �           0    0    notasCredito_serie_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."notasCredito_serie_seq"', 1, false);
          public          postgres    false    371            �           0    0    notificacion_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.notificacion_id_seq', 1, false);
          public          postgres    false    374            �           0    0    nuevaCotizacion_codigo_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public."nuevaCotizacion_codigo_seq"', 1, false);
          public          postgres    false    496            �           0    0    nuevaCotizacion_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."nuevaCotizacion_id_seq"', 1, false);
          public          postgres    false    495            �           0    0 $   nuevaOrdenCompraFoliosSurtido_id_seq    SEQUENCE SET     U   SELECT pg_catalog.setval('public."nuevaOrdenCompraFoliosSurtido_id_seq"', 1, false);
          public          postgres    false    380            �           0    0 *   nuevasOrdenesCompraArchivosAdjuntos_id_seq    SEQUENCE SET     [   SELECT pg_catalog.setval('public."nuevasOrdenesCompraArchivosAdjuntos_id_seq"', 1, false);
          public          postgres    false    382            �           0    0 .   nuevasOrdenesCompraArchivosAdjuntos_numero_seq    SEQUENCE SET     _   SELECT pg_catalog.setval('public."nuevasOrdenesCompraArchivosAdjuntos_numero_seq"', 1, false);
          public          postgres    false    383            �           0    0 "   ordenCompraArchivosAdjuntos_id_seq    SEQUENCE SET     S   SELECT pg_catalog.setval('public."ordenCompraArchivosAdjuntos_id_seq"', 1, false);
          public          postgres    false    385            �           0    0 &   ordenCompraArchivosAdjuntos_numero_seq    SEQUENCE SET     W   SELECT pg_catalog.setval('public."ordenCompraArchivosAdjuntos_numero_seq"', 1, false);
          public          postgres    false    386            �           0    0    ordenCompraFoliosSurtido_id_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('public."ordenCompraFoliosSurtido_id_seq"', 1, false);
          public          postgres    false    388            �           0    0 #   ordenCompraFoliosSurtido_numero_seq    SEQUENCE SET     T   SELECT pg_catalog.setval('public."ordenCompraFoliosSurtido_numero_seq"', 1, false);
          public          postgres    false    389            �           0    0 #   ordenesCompraListadoEntradas_id_seq    SEQUENCE SET     S   SELECT pg_catalog.setval('public."ordenesCompraListadoEntradas_id_seq"', 9, true);
          public          postgres    false    391            �           0    0 '   ordenesCompraListadoEntradas_numero_seq    SEQUENCE SET     X   SELECT pg_catalog.setval('public."ordenesCompraListadoEntradas_numero_seq"', 1, false);
          public          postgres    false    392            �           0    0    pagos_folio_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.pagos_folio_seq', 7, true);
          public          postgres    false    499            �           0    0    pagos_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.pagos_id_seq', 10, true);
          public          postgres    false    498            �           0    0    pedidoo_idpedido_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.pedidoo_idpedido_seq', 1, false);
          public          postgres    false    235            �           0    0 !   pedidosPendientesSurtir_folio_seq    SEQUENCE SET     Q   SELECT pg_catalog.setval('public."pedidosPendientesSurtir_folio_seq"', 1, true);
          public          postgres    false    398            �           0    0    pedidosPendientesSurtir_id_seq    SEQUENCE SET     N   SELECT pg_catalog.setval('public."pedidosPendientesSurtir_id_seq"', 1, true);
          public          postgres    false    397            �           0    0    pedidos_folio_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.pedidos_folio_seq', 1, false);
          public          postgres    false    395            �           0    0    pedidos_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.pedidos_id_seq', 42, true);
          public          postgres    false    394            �           0    0    productoos_codigoEmpresa_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public."productoos_codigoEmpresa_seq"', 9, true);
          public          postgres    false    238            �           0    0    productoos_codigoFabricante_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public."productoos_codigoFabricante_seq"', 9, true);
          public          postgres    false    239            �           0    0    productoos_idproducto_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.productoos_idproducto_seq', 197, true);
          public          postgres    false    237            �           0    0    productosCotizados_id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public."productosCotizados_id_seq"', 1, false);
          public          postgres    false    400            �           0    0    productosLaOrdenCompra_id_seq    SEQUENCE SET     N   SELECT pg_catalog.setval('public."productosLaOrdenCompra_id_seq"', 1, false);
          public          postgres    false    402            �           0    0    productosPedido_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."productosPedido_id_seq"', 1, false);
          public          postgres    false    404            �           0    0    productosRelacionados_id_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public."productosRelacionados_id_seq"', 1, false);
          public          postgres    false    406            �           0    0    productosSurtidosPedido_id_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public."productosSurtidosPedido_id_seq"', 1, false);
          public          postgres    false    408            �           0    0    productosSurtirPedido_id_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public."productosSurtirPedido_id_seq"', 1, false);
          public          postgres    false    410            �           0    0    productosTransferencia_id_seq    SEQUENCE SET     N   SELECT pg_catalog.setval('public."productosTransferencia_id_seq"', 1, false);
          public          postgres    false    412            �           0    0    provedoresProducto_id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public."provedoresProducto_id_seq"', 1, false);
          public          postgres    false    416            �           0    0    provedores_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.provedores_id_seq', 1, false);
          public          postgres    false    414            �           0    0     recordPorProducto_idProducto_seq    SEQUENCE SET     Q   SELECT pg_catalog.setval('public."recordPorProducto_idProducto_seq"', 1, false);
          public          postgres    false    419            �           0    0    recordPorProducto_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."recordPorProducto_id_seq"', 1, false);
          public          postgres    false    418            �           0    0    recordProducto_idProducto_seq    SEQUENCE SET     N   SELECT pg_catalog.setval('public."recordProducto_idProducto_seq"', 1, false);
          public          postgres    false    422            �           0    0    recordProducto_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."recordProducto_id_seq"', 1, false);
          public          postgres    false    421            �           0    0    refreshTokens_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."refreshTokens_id_seq"', 246, true);
          public          postgres    false    504            �           0    0    reporteCobranza_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."reporteCobranza_id_seq"', 1, false);
          public          postgres    false    424            �           0    0    reporteComisiones_folio_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public."reporteComisiones_folio_seq"', 1, false);
          public          postgres    false    427            �           0    0    reporteComisiones_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."reporteComisiones_id_seq"', 1, false);
          public          postgres    false    426            �           0    0    reporteFacturas_folio_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public."reporteFacturas_folio_seq"', 1, false);
          public          postgres    false    430            �           0    0    reporteFacturas_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."reporteFacturas_id_seq"', 1, false);
          public          postgres    false    429            �           0    0 #   reporteInventario_codigoEmpresa_seq    SEQUENCE SET     T   SELECT pg_catalog.setval('public."reporteInventario_codigoEmpresa_seq"', 1, false);
          public          postgres    false    434                        0    0 #   reporteInventario_codigoFabrica_seq    SEQUENCE SET     T   SELECT pg_catalog.setval('public."reporteInventario_codigoFabrica_seq"', 1, false);
          public          postgres    false    433                       0    0    reporteInventario_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."reporteInventario_id_seq"', 1, false);
          public          postgres    false    432                       0    0    reporteVentasClienfe_id_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public."reporteVentasClienfe_id_seq"', 1, false);
          public          postgres    false    436                       0    0    reporteVentas_folio_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."reporteVentas_folio_seq"', 1, false);
          public          postgres    false    482                       0    0    reporteVentas_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."reporteVentas_id_seq"', 1, false);
          public          postgres    false    481                       0    0    status_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.status_id_seq', 9, true);
          public          postgres    false    233                       0    0 *   sucursalesAlmacenesListadoProductos_id_seq    SEQUENCE SET     [   SELECT pg_catalog.setval('public."sucursalesAlmacenesListadoProductos_id_seq"', 1, false);
          public          postgres    false    438                       0    0    sucursalesDatos_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."sucursalesDatos_id_seq"', 38, true);
          public          postgres    false    525                       0    0    surtir_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.surtir_id_seq', 1, false);
          public          postgres    false    440            	           0    0    tarjetaCredito_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."tarjetaCredito_id_seq"', 1, false);
          public          postgres    false    442            
           0    0    tarjetaCredito_ticket_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public."tarjetaCredito_ticket_seq"', 1, false);
          public          postgres    false    443                       0    0    tarjetaDebito_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."tarjetaDebito_id_seq"', 1, false);
          public          postgres    false    445                       0    0    tarjetaDebito_ticket_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."tarjetaDebito_ticket_seq"', 1, false);
          public          postgres    false    446                       0    0    ticket_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.ticket_id_seq', 1, false);
          public          postgres    false    451                       0    0    ticket_ticket_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.ticket_ticket_seq', 1, false);
          public          postgres    false    452                       0    0    tickets_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.tickets_id_seq', 1, false);
          public          postgres    false    448                       0    0    tickets_ticket_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.tickets_ticket_seq', 1, false);
          public          postgres    false    449                       0    0    tiposEnvioGastosEnvio_id_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public."tiposEnvioGastosEnvio_id_seq"', 1, false);
          public          postgres    false    454                       0    0 %   transferenciIndividualArchivos_id_seq    SEQUENCE SET     V   SELECT pg_catalog.setval('public."transferenciIndividualArchivos_id_seq"', 1, false);
          public          postgres    false    456                       0    0 )   transferenciIndividualArchivos_numero_seq    SEQUENCE SET     Z   SELECT pg_catalog.setval('public."transferenciIndividualArchivos_numero_seq"', 1, false);
          public          postgres    false    457                       0    0 9   transferenciaAlmacenesListadoIndividual_codigoEmpresa_seq    SEQUENCE SET     j   SELECT pg_catalog.setval('public."transferenciaAlmacenesListadoIndividual_codigoEmpresa_seq"', 1, false);
          public          postgres    false    461                       0    0 1   transferenciaAlmacenesListadoIndividual_folio_seq    SEQUENCE SET     b   SELECT pg_catalog.setval('public."transferenciaAlmacenesListadoIndividual_folio_seq"', 1, false);
          public          postgres    false    460                       0    0 .   transferenciaAlmacenesListadoIndividual_id_seq    SEQUENCE SET     _   SELECT pg_catalog.setval('public."transferenciaAlmacenesListadoIndividual_id_seq"', 1, false);
          public          postgres    false    459                       0    0 &   transferenciaIndividualDetalles_id_seq    SEQUENCE SET     W   SELECT pg_catalog.setval('public."transferenciaIndividualDetalles_id_seq"', 1, false);
          public          postgres    false    463                       0    0     uicacionTarjetaAlmacen_folio_seq    SEQUENCE SET     Q   SELECT pg_catalog.setval('public."uicacionTarjetaAlmacen_folio_seq"', 1, false);
          public          postgres    false    466                       0    0    uicacionTarjetaAlmacen_id_seq    SEQUENCE SET     N   SELECT pg_catalog.setval('public."uicacionTarjetaAlmacen_id_seq"', 1, false);
          public          postgres    false    465                       0    0    usuarios_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.usuarios_id_seq', 114, true);
          public          postgres    false    502                       0    0    vendedoresImages_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."vendedoresImages_id_seq"', 1, false);
          public          postgres    false    515                       0    0    vendedores_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.vendedores_id_seq', 1, false);
          public          postgres    false    468                       0    0    ventasEfectivo_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."ventasEfectivo_id_seq"', 1, false);
          public          postgres    false    470                       0    0    ventasEfectivo_ticket_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public."ventasEfectivo_ticket_seq"', 1, false);
          public          postgres    false    471                       0    0    ventasRealizadas_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."ventasRealizadas_id_seq"', 1, false);
          public          postgres    false    473                        0    0    ventasRealizadas_ticket_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public."ventasRealizadas_ticket_seq"', 1, false);
          public          postgres    false    474            !           0    0    verPedido_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."verPedido_id_seq"', 1, false);
          public          postgres    false    476            d           2606    18875 J   nuevaOrdenCompraFoliosSurtido Nueva_orden_de_compra_folios_de_surtido_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."nuevaOrdenCompraFoliosSurtido"
    ADD CONSTRAINT "Nueva_orden_de_compra_folios_de_surtido_pkey" PRIMARY KEY (id);
 x   ALTER TABLE ONLY public."nuevaOrdenCompraFoliosSurtido" DROP CONSTRAINT "Nueva_orden_de_compra_folios_de_surtido_pkey";
       public            postgres    false    381            f           2606    18889 S   nuevasOrdenesCompraArchivosAdjuntos Nuevas_ordenes_de_compra_archivos_adjuntos_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."nuevasOrdenesCompraArchivosAdjuntos"
    ADD CONSTRAINT "Nuevas_ordenes_de_compra_archivos_adjuntos_pkey" PRIMARY KEY (id);
 �   ALTER TABLE ONLY public."nuevasOrdenesCompraArchivosAdjuntos" DROP CONSTRAINT "Nuevas_ordenes_de_compra_archivos_adjuntos_pkey";
       public            postgres    false    384            m           2606    18920 ?   ordenCompraFoliosSurtido Orden_de_compra_Folios_de_surtdio_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."ordenCompraFoliosSurtido"
    ADD CONSTRAINT "Orden_de_compra_Folios_de_surtdio_pkey" PRIMARY KEY (id);
 m   ALTER TABLE ONLY public."ordenCompraFoliosSurtido" DROP CONSTRAINT "Orden_de_compra_Folios_de_surtdio_pkey";
       public            postgres    false    390            j           2606    18905 B   ordenCompraArchivosAdjuntos Orden_de_compra_archivos_adjuntos_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."ordenCompraArchivosAdjuntos"
    ADD CONSTRAINT "Orden_de_compra_archivos_adjuntos_pkey" PRIMARY KEY (id);
 p   ALTER TABLE ONLY public."ordenCompraArchivosAdjuntos" DROP CONSTRAINT "Orden_de_compra_archivos_adjuntos_pkey";
       public            postgres    false    387            o           2606    18936 I   ordenesCompraListadoEntradas Ordenes de compra - Listado de entradas_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."ordenesCompraListadoEntradas"
    ADD CONSTRAINT "Ordenes de compra - Listado de entradas_pkey" PRIMARY KEY (id);
 w   ALTER TABLE ONLY public."ordenesCompraListadoEntradas" DROP CONSTRAINT "Ordenes de compra - Listado de entradas_pkey";
       public            postgres    false    393            w           2606    18989 ;   productosLaOrdenCompra Productos_en_la_orden_de_compra_pkey 
   CONSTRAINT     }   ALTER TABLE ONLY public."productosLaOrdenCompra"
    ADD CONSTRAINT "Productos_en_la_orden_de_compra_pkey" PRIMARY KEY (id);
 i   ALTER TABLE ONLY public."productosLaOrdenCompra" DROP CONSTRAINT "Productos_en_la_orden_de_compra_pkey";
       public            postgres    false    403            �           2606    19585    pedidos Stratus    CHECK CONSTRAINT     n   ALTER TABLE public.pedidos
    ADD CONSTRAINT "Stratus" CHECK (((status >= 0) AND (status <= 10))) NOT VALID;
 6   ALTER TABLE public.pedidos DROP CONSTRAINT "Stratus";
       public          postgres    false    396    396            �           2606    17838 0   abonoAplicadoEfectivo abonoAplicadoEfectivo_pkey 
   CONSTRAINT     y   ALTER TABLE ONLY public."abonoAplicadoEfectivo"
    ADD CONSTRAINT "abonoAplicadoEfectivo_pkey" PRIMARY KEY (folio, id);
 ^   ALTER TABLE ONLY public."abonoAplicadoEfectivo" DROP CONSTRAINT "abonoAplicadoEfectivo_pkey";
       public            postgres    false    214    214            �           2606    17850 $   abonosAplicados abonosAplicados_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public."abonosAplicados"
    ADD CONSTRAINT "abonosAplicados_pkey" PRIMARY KEY (id);
 R   ALTER TABLE ONLY public."abonosAplicados" DROP CONSTRAINT "abonosAplicados_pkey";
       public            postgres    false    215            �           2606    17862 &   abonosCancelados abonosCancelados_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public."abonosCancelados"
    ADD CONSTRAINT "abonosCancelados_pkey" PRIMARY KEY (id);
 T   ALTER TABLE ONLY public."abonosCancelados" DROP CONSTRAINT "abonosCancelados_pkey";
       public            postgres    false    216            �           2606    19521 8   agregarProductoCotizacion agregarProductoCotizacion_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."agregarProductoCotizacion"
    ADD CONSTRAINT "agregarProductoCotizacion_pkey" PRIMARY KEY (id, "codigoEmpresaa", "codigoFabricante");
 f   ALTER TABLE ONLY public."agregarProductoCotizacion" DROP CONSTRAINT "agregarProductoCotizacion_pkey";
       public            postgres    false    494    494    494            �           2606    17876 :   agregarProductoRelacionado agregarProductoRelacionado_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."agregarProductoRelacionado"
    ADD CONSTRAINT "agregarProductoRelacionado_pkey" PRIMARY KEY ("codigoEmpresa", id);
 h   ALTER TABLE ONLY public."agregarProductoRelacionado" DROP CONSTRAINT "agregarProductoRelacionado_pkey";
       public            postgres    false    217    217            �           2606    17890 $   agregarProvedor agregarProvedor_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public."agregarProvedor"
    ADD CONSTRAINT "agregarProvedor_pkey" PRIMARY KEY (id);
 R   ALTER TABLE ONLY public."agregarProvedor" DROP CONSTRAINT "agregarProvedor_pkey";
       public            postgres    false    218            �           2606    17904 $   almacenSucursal almacenSucursal_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public."almacenSucursal"
    ADD CONSTRAINT "almacenSucursal_pkey" PRIMARY KEY (id);
 R   ALTER TABLE ONLY public."almacenSucursal" DROP CONSTRAINT "almacenSucursal_pkey";
       public            postgres    false    219            �           2606    17922 T   archivosAdjuntosListadoArchivosAdjuntos archivosAdjuntosListadoArchivosAdjuntos_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."archivosAdjuntosListadoArchivosAdjuntos"
    ADD CONSTRAINT "archivosAdjuntosListadoArchivosAdjuntos_pkey" PRIMARY KEY (id);
 �   ALTER TABLE ONLY public."archivosAdjuntosListadoArchivosAdjuntos" DROP CONSTRAINT "archivosAdjuntosListadoArchivosAdjuntos_pkey";
       public            postgres    false    220            �           2606    17936 "   buscarProducto buscarProducto_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."buscarProducto"
    ADD CONSTRAINT "buscarProducto_pkey" PRIMARY KEY (id);
 P   ALTER TABLE ONLY public."buscarProducto" DROP CONSTRAINT "buscarProducto_pkey";
       public            postgres    false    221            �           2606    17950 &   busquedaReportes busquedaReportes_pkey 
   CONSTRAINT     o   ALTER TABLE ONLY public."busquedaReportes"
    ADD CONSTRAINT "busquedaReportes_pkey" PRIMARY KEY (folio, id);
 T   ALTER TABLE ONLY public."busquedaReportes" DROP CONSTRAINT "busquedaReportes_pkey";
       public            postgres    false    222    222            �           2606    17964    categoria categoria_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.categoria
    ADD CONSTRAINT categoria_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.categoria DROP CONSTRAINT categoria_pkey;
       public            postgres    false    223            �           2606    19583    pedidos check_entrega_range    CHECK CONSTRAINT     y   ALTER TABLE public.pedidos
    ADD CONSTRAINT check_entrega_range CHECK (((entrega >= 0) AND (entrega <= 3))) NOT VALID;
 @   ALTER TABLE public.pedidos DROP CONSTRAINT check_entrega_range;
       public          postgres    false    396    396            �           2606    19560    pagos check_status2_range    CHECK CONSTRAINT     w   ALTER TABLE public.pagos
    ADD CONSTRAINT check_status2_range CHECK (((status2 >= 0) AND (status2 <= 4))) NOT VALID;
 >   ALTER TABLE public.pagos DROP CONSTRAINT check_status2_range;
       public          postgres    false    500    500            �           2606    17985    cheque cheque_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.cheque
    ADD CONSTRAINT cheque_pkey PRIMARY KEY (id, ticket);
 <   ALTER TABLE ONLY public.cheque DROP CONSTRAINT cheque_pkey;
       public            postgres    false    224    224            �           2606    19765    clientes clientes_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.clientes
    ADD CONSTRAINT clientes_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.clientes DROP CONSTRAINT clientes_pkey;
       public            postgres    false    225            �           2606    18021 @   cobranzaPagosPendientesCobrar cobranzaPagosPendientesCobrar_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."cobranzaPagosPendientesCobrar"
    ADD CONSTRAINT "cobranzaPagosPendientesCobrar_pkey" PRIMARY KEY (id);
 n   ALTER TABLE ONLY public."cobranzaPagosPendientesCobrar" DROP CONSTRAINT "cobranzaPagosPendientesCobrar_pkey";
       public            postgres    false    226            �           2606    19601    cobranzasDia cobranzasDia_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public."cobranzasDia"
    ADD CONSTRAINT "cobranzasDia_pkey" PRIMARY KEY (id);
 L   ALTER TABLE ONLY public."cobranzasDia" DROP CONSTRAINT "cobranzasDia_pkey";
       public            postgres    false    506            �           2606    19471    comisiones comisiones_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.comisiones
    ADD CONSTRAINT comisiones_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.comisiones DROP CONSTRAINT comisiones_pkey;
       public            postgres    false    485            �           2606    18063 &   complementosPafo complementosPafo_pkey 
   CONSTRAINT     v   ALTER TABLE ONLY public."complementosPafo"
    ADD CONSTRAINT "complementosPafo_pkey" PRIMARY KEY (id, folio, serie);
 T   ALTER TABLE ONLY public."complementosPafo" DROP CONSTRAINT "complementosPafo_pkey";
       public            postgres    false    227    227    227            �           2606    18112    contenedores contenedores_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.contenedores
    ADD CONSTRAINT contenedores_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.contenedores DROP CONSTRAINT contenedores_pkey;
       public            postgres    false    228            �           2606    18127 "   costoProductos costoProductos_pkey 
   CONSTRAINT     u   ALTER TABLE ONLY public."costoProductos"
    ADD CONSTRAINT "costoProductos_pkey" PRIMARY KEY ("codigoEmpresa", id);
 P   ALTER TABLE ONLY public."costoProductos" DROP CONSTRAINT "costoProductos_pkey";
       public            postgres    false    229    229            �           2606    18141    costosEnvio costosEnvio_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public."costosEnvio"
    ADD CONSTRAINT "costosEnvio_pkey" PRIMARY KEY (id);
 J   ALTER TABLE ONLY public."costosEnvio" DROP CONSTRAINT "costosEnvio_pkey";
       public            postgres    false    230            �           2606    19837    cotizaciones cotizaciones_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public.cotizaciones
    ADD CONSTRAINT cotizaciones_pkey PRIMARY KEY (folio);
 H   ALTER TABLE ONLY public.cotizaciones DROP CONSTRAINT cotizaciones_pkey;
       public            postgres    false    487            �           2606    19733 "   customerImages customerImages_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."customerImages"
    ADD CONSTRAINT "customerImages_pkey" PRIMARY KEY (id);
 P   ALTER TABLE ONLY public."customerImages" DROP CONSTRAINT "customerImages_pkey";
       public            postgres    false    514            �           2606    19498    datosCliente datosCliente_pkey 
   CONSTRAINT     q   ALTER TABLE ONLY public."datosCliente"
    ADD CONSTRAINT "datosCliente_pkey" PRIMARY KEY (id, "numeroCliente");
 L   ALTER TABLE ONLY public."datosCliente" DROP CONSTRAINT "datosCliente_pkey";
       public            postgres    false    490    490            �           2606    18162    datosPedido datosPedido_pkey 
   CONSTRAINT     e   ALTER TABLE ONLY public."datosPedido"
    ADD CONSTRAINT "datosPedido_pkey" PRIMARY KEY (id, folio);
 J   ALTER TABLE ONLY public."datosPedido" DROP CONSTRAINT "datosPedido_pkey";
       public            postgres    false    231    231            �           2606    19633     datosUsuarios datosUsuarios_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public."datosUsuarios"
    ADD CONSTRAINT "datosUsuarios_pkey" PRIMARY KEY (id);
 N   ALTER TABLE ONLY public."datosUsuarios" DROP CONSTRAINT "datosUsuarios_pkey";
       public            postgres    false    512            �           2606    18176 B   datosVendedorClientesAsignados datosVendedorClientesAsignados_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."datosVendedorClientesAsignados"
    ADD CONSTRAINT "datosVendedorClientesAsignados_pkey" PRIMARY KEY (id);
 p   ALTER TABLE ONLY public."datosVendedorClientesAsignados" DROP CONSTRAINT "datosVendedorClientesAsignados_pkey";
       public            postgres    false    232                       2606    18190     detallePedido detallePedido_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public."detallePedido"
    ADD CONSTRAINT "detallePedido_pkey" PRIMARY KEY (id);
 N   ALTER TABLE ONLY public."detallePedido" DROP CONSTRAINT "detallePedido_pkey";
       public            postgres    false    265                       2606    18218 "   detallesVentas detallesVentas_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."detallesVentas"
    ADD CONSTRAINT "detallesVentas_pkey" PRIMARY KEY (id);
 P   ALTER TABLE ONLY public."detallesVentas" DROP CONSTRAINT "detallesVentas_pkey";
       public            postgres    false    269            
           2606    18204 '   detallesReporteInventario detalles_pkey 
   CONSTRAINT     g   ALTER TABLE ONLY public."detallesReporteInventario"
    ADD CONSTRAINT detalles_pkey PRIMARY KEY (id);
 S   ALTER TABLE ONLY public."detallesReporteInventario" DROP CONSTRAINT detalles_pkey;
       public            postgres    false    267                       2606    18232    dineroCaja dineroCaja_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public."dineroCaja"
    ADD CONSTRAINT "dineroCaja_pkey" PRIMARY KEY (id);
 H   ALTER TABLE ONLY public."dineroCaja" DROP CONSTRAINT "dineroCaja_pkey";
       public            postgres    false    271                       2606    18249 0   entradaSalidaEfectivo entradaSalidaEfectivo_pkey 
   CONSTRAINT     y   ALTER TABLE ONLY public."entradaSalidaEfectivo"
    ADD CONSTRAINT "entradaSalidaEfectivo_pkey" PRIMARY KEY (id, folio);
 ^   ALTER TABLE ONLY public."entradaSalidaEfectivo" DROP CONSTRAINT "entradaSalidaEfectivo_pkey";
       public            postgres    false    274    274                       2606    18263 ,   entradasCajaGeneral entradasCajaGeneral_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public."entradasCajaGeneral"
    ADD CONSTRAINT "entradasCajaGeneral_pkey" PRIMARY KEY (id);
 Z   ALTER TABLE ONLY public."entradasCajaGeneral" DROP CONSTRAINT "entradasCajaGeneral_pkey";
       public            postgres    false    276                       2606    18292 2   estadosCuentaHistorial estadosCuentaHistorial_pkey 
   CONSTRAINT     t   ALTER TABLE ONLY public."estadosCuentaHistorial"
    ADD CONSTRAINT "estadosCuentaHistorial_pkey" PRIMARY KEY (id);
 `   ALTER TABLE ONLY public."estadosCuentaHistorial" DROP CONSTRAINT "estadosCuentaHistorial_pkey";
       public            postgres    false    280                       2606    18278     estadosCuenta estadosCuenta_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public."estadosCuenta"
    ADD CONSTRAINT "estadosCuenta_pkey" PRIMARY KEY (id);
 N   ALTER TABLE ONLY public."estadosCuenta" DROP CONSTRAINT "estadosCuenta_pkey";
       public            postgres    false    278                       2606    18308     facturaGlobal facturaGlobal_pkey 
   CONSTRAINT     i   ALTER TABLE ONLY public."facturaGlobal"
    ADD CONSTRAINT "facturaGlobal_pkey" PRIMARY KEY (id, folio);
 N   ALTER TABLE ONLY public."facturaGlobal" DROP CONSTRAINT "facturaGlobal_pkey";
       public            postgres    false    283    283            �           2606    19754 0   fichaClienteAccesoWeb fichaClienteAccesoWeb_pkey 
   CONSTRAINT     {   ALTER TABLE ONLY public."fichaClienteAccesoWeb"
    ADD CONSTRAINT "fichaClienteAccesoWeb_pkey" PRIMARY KEY ("idCliente");
 ^   ALTER TABLE ONLY public."fichaClienteAccesoWeb" DROP CONSTRAINT "fichaClienteAccesoWeb_pkey";
       public            postgres    false    518                       2606    18322 0   fichaClienteContactos fichaClienteContactos_pkey 
   CONSTRAINT     r   ALTER TABLE ONLY public."fichaClienteContactos"
    ADD CONSTRAINT "fichaClienteContactos_pkey" PRIMARY KEY (id);
 ^   ALTER TABLE ONLY public."fichaClienteContactos" DROP CONSTRAINT "fichaClienteContactos_pkey";
       public            postgres    false    285                        2606    18351 6   fichaClienteEstadoCuenta fichaClienteEstadoCuenta_pkey 
   CONSTRAINT     x   ALTER TABLE ONLY public."fichaClienteEstadoCuenta"
    ADD CONSTRAINT "fichaClienteEstadoCuenta_pkey" PRIMARY KEY (id);
 d   ALTER TABLE ONLY public."fichaClienteEstadoCuenta" DROP CONSTRAINT "fichaClienteEstadoCuenta_pkey";
       public            postgres    false    289            �           2606    19763 R   fichaClienteFacturacionDireccionFiscal fichaClienteFacturacionDireccionFiscal_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."fichaClienteFacturacionDireccionFiscal"
    ADD CONSTRAINT "fichaClienteFacturacionDireccionFiscal_pkey" PRIMARY KEY (id);
 �   ALTER TABLE ONLY public."fichaClienteFacturacionDireccionFiscal" DROP CONSTRAINT "fichaClienteFacturacionDireccionFiscal_pkey";
       public            postgres    false    520            "           2606    18365 =   fichaClienteFacturacionGenerales fichaClienteFacturacion_pkey 
   CONSTRAINT        ALTER TABLE ONLY public."fichaClienteFacturacionGenerales"
    ADD CONSTRAINT "fichaClienteFacturacion_pkey" PRIMARY KEY (id);
 k   ALTER TABLE ONLY public."fichaClienteFacturacionGenerales" DROP CONSTRAINT "fichaClienteFacturacion_pkey";
       public            postgres    false    291            $           2606    18379 X   foliosSurtidoBitacoraRecepcionesMercancia foliosSurtidoBitacoraRecepcionesMercancia_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."foliosSurtidoBitacoraRecepcionesMercancia"
    ADD CONSTRAINT "foliosSurtidoBitacoraRecepcionesMercancia_pkey" PRIMARY KEY (id);
 �   ALTER TABLE ONLY public."foliosSurtidoBitacoraRecepcionesMercancia" DROP CONSTRAINT "foliosSurtidoBitacoraRecepcionesMercancia_pkey";
       public            postgres    false    293            &           2606    18393 &   formasPagoPedido formasPagoPedido_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public."formasPagoPedido"
    ADD CONSTRAINT "formasPagoPedido_pkey" PRIMARY KEY (id);
 T   ALTER TABLE ONLY public."formasPagoPedido" DROP CONSTRAINT "formasPagoPedido_pkey";
       public            postgres    false    295            -           2606    18441 D   historialProductoUltimasCompras historialProductoUltimasCompras_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."historialProductoUltimasCompras"
    ADD CONSTRAINT "historialProductoUltimasCompras_pkey" PRIMARY KEY (id, "numeroOrdenCompra");
 r   ALTER TABLE ONLY public."historialProductoUltimasCompras" DROP CONSTRAINT "historialProductoUltimasCompras_pkey";
       public            postgres    false    304    304            /           2606    18455 B   historialProductoUltimasVentas historialProductoUltimasVentas_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."historialProductoUltimasVentas"
    ADD CONSTRAINT "historialProductoUltimasVentas_pkey" PRIMARY KEY (id, "numeroPedido");
 p   ALTER TABLE ONLY public."historialProductoUltimasVentas" DROP CONSTRAINT "historialProductoUltimasVentas_pkey";
       public            postgres    false    307    307            +           2606    18427 (   historialProducto historialProducto_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."historialProducto"
    ADD CONSTRAINT "historialProducto_pkey" PRIMARY KEY (id, "codigoFabricante", "codigoEmpresa");
 V   ALTER TABLE ONLY public."historialProducto" DROP CONSTRAINT "historialProducto_pkey";
       public            postgres    false    301    301    301            )           2606    18408    historial historial_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.historial
    ADD CONSTRAINT historial_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.historial DROP CONSTRAINT historial_pkey;
       public            postgres    false    297                       2606    18336    fichaClienteDireccionesEnvio id 
   CONSTRAINT     _   ALTER TABLE ONLY public."fichaClienteDireccionesEnvio"
    ADD CONSTRAINT id PRIMARY KEY (id);
 K   ALTER TABLE ONLY public."fichaClienteDireccionesEnvio" DROP CONSTRAINT id;
       public            postgres    false    287            1           2606    18469 &   impuestosSistema impuestosSistema_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public."impuestosSistema"
    ADD CONSTRAINT "impuestosSistema_pkey" PRIMARY KEY (id);
 T   ALTER TABLE ONLY public."impuestosSistema" DROP CONSTRAINT "impuestosSistema_pkey";
       public            postgres    false    309            3           2606    18487 V   inventarioAlmacenReporteInventarioBodega inventarioAlmacenReporteInventarioBodega_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."inventarioAlmacenReporteInventarioBodega"
    ADD CONSTRAINT "inventarioAlmacenReporteInventarioBodega_pkey" PRIMARY KEY (id, "codigoFabrica", "codigoEmpresa");
 �   ALTER TABLE ONLY public."inventarioAlmacenReporteInventarioBodega" DROP CONSTRAINT "inventarioAlmacenReporteInventarioBodega_pkey";
       public            postgres    false    313    313    313            5           2606    18501 8   inventarioGeneralDetalles inventarioGeneralDetalles_pkey 
   CONSTRAINT     z   ALTER TABLE ONLY public."inventarioGeneralDetalles"
    ADD CONSTRAINT "inventarioGeneralDetalles_pkey" PRIMARY KEY (id);
 f   ALTER TABLE ONLY public."inventarioGeneralDetalles" DROP CONSTRAINT "inventarioGeneralDetalles_pkey";
       public            postgres    false    315            7           2606    18519 J   inventarioGeneralReporteInventario inventarioGeneralReporteInventario_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."inventarioGeneralReporteInventario"
    ADD CONSTRAINT "inventarioGeneralReporteInventario_pkey" PRIMARY KEY (id);
 x   ALTER TABLE ONLY public."inventarioGeneralReporteInventario" DROP CONSTRAINT "inventarioGeneralReporteInventario_pkey";
       public            postgres    false    319            9           2606    18535 D   inventarioGeneralTarjetaAlmacen inventarioGeneralTarjetaAlmacen_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."inventarioGeneralTarjetaAlmacen"
    ADD CONSTRAINT "inventarioGeneralTarjetaAlmacen_pkey" PRIMARY KEY (id, folio);
 r   ALTER TABLE ONLY public."inventarioGeneralTarjetaAlmacen" DROP CONSTRAINT "inventarioGeneralTarjetaAlmacen_pkey";
       public            postgres    false    322    322            ;           2606    18553 L   inventarioXAlmacenReporteInventario inventarioXAlmacenReporteInventario_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."inventarioXAlmacenReporteInventario"
    ADD CONSTRAINT "inventarioXAlmacenReporteInventario_pkey" PRIMARY KEY (id, "codigoEmpresa", "codigoFabricante");
 z   ALTER TABLE ONLY public."inventarioXAlmacenReporteInventario" DROP CONSTRAINT "inventarioXAlmacenReporteInventario_pkey";
       public            postgres    false    326    326    326            �           2606    19442 $   listadoClientes listadoClientes_pkey 
   CONSTRAINT     w   ALTER TABLE ONLY public."listadoClientes"
    ADD CONSTRAINT "listadoClientes_pkey" PRIMARY KEY (id, "numeroCliente");
 R   ALTER TABLE ONLY public."listadoClientes" DROP CONSTRAINT "listadoClientes_pkey";
       public            postgres    false    480    480            =           2606    18584 (   listadoComisiones listadoComisiones_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public."listadoComisiones"
    ADD CONSTRAINT "listadoComisiones_pkey" PRIMARY KEY (id);
 V   ALTER TABLE ONLY public."listadoComisiones" DROP CONSTRAINT "listadoComisiones_pkey";
       public            postgres    false    328            ?           2606    18602 $   listadoEntradas listadoEntradas_pkey 
   CONSTRAINT     ~   ALTER TABLE ONLY public."listadoEntradas"
    ADD CONSTRAINT "listadoEntradas_pkey" PRIMARY KEY (id, folio, "codigoEmpresa");
 R   ALTER TABLE ONLY public."listadoEntradas" DROP CONSTRAINT "listadoEntradas_pkey";
       public            postgres    false    332    332    332            �           2606    19624 (   listadoFormasPago listadoFormasPago_pkey 
   CONSTRAINT     s   ALTER TABLE ONLY public."listadoFormasPago"
    ADD CONSTRAINT "listadoFormasPago_pkey" PRIMARY KEY ("isUpdated");
 V   ALTER TABLE ONLY public."listadoFormasPago" DROP CONSTRAINT "listadoFormasPago_pkey";
       public            postgres    false    510            �           2606    19610 "   listadoPrecios listadoPrecios_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."listadoPrecios"
    ADD CONSTRAINT "listadoPrecios_pkey" PRIMARY KEY (id);
 P   ALTER TABLE ONLY public."listadoPrecios" DROP CONSTRAINT "listadoPrecios_pkey";
       public            postgres    false    508            C           2606    18636 8   listadoProductosDescuento listadoProductosDescuento_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."listadoProductosDescuento"
    ADD CONSTRAINT "listadoProductosDescuento_pkey" PRIMARY KEY (id, "codigoEmpresa");
 f   ALTER TABLE ONLY public."listadoProductosDescuento" DROP CONSTRAINT "listadoProductosDescuento_pkey";
       public            postgres    false    339    339            E           2606    18654 D   listadoProductosMargenProductos listadoProductosMargenProductos_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."listadoProductosMargenProductos"
    ADD CONSTRAINT "listadoProductosMargenProductos_pkey" PRIMARY KEY (id, "codigoFabricante", "codigoEmpresa");
 r   ALTER TABLE ONLY public."listadoProductosMargenProductos" DROP CONSTRAINT "listadoProductosMargenProductos_pkey";
       public            postgres    false    343    343    343            A           2606    18620 &   listadoProductos listadoProductos_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."listadoProductos"
    ADD CONSTRAINT "listadoProductos_pkey" PRIMARY KEY (id, "codigoFabricante", "codigoEmpresa");
 T   ALTER TABLE ONLY public."listadoProductos" DROP CONSTRAINT "listadoProductos_pkey";
       public            postgres    false    336    336    336            G           2606    18670     listadoSalida listadoSalida_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public."listadoSalida"
    ADD CONSTRAINT "listadoSalida_pkey" PRIMARY KEY (id);
 N   ALTER TABLE ONLY public."listadoSalida" DROP CONSTRAINT "listadoSalida_pkey";
       public            postgres    false    346            K           2606    18700 d   listadoTransferenciaMasivaDetallesTransferencia listadoTransferenciaMasivaDetallesTransferencia_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."listadoTransferenciaMasivaDetallesTransferencia"
    ADD CONSTRAINT "listadoTransferenciaMasivaDetallesTransferencia_pkey" PRIMARY KEY (id);
 �   ALTER TABLE ONLY public."listadoTransferenciaMasivaDetallesTransferencia" DROP CONSTRAINT "listadoTransferenciaMasivaDetallesTransferencia_pkey";
       public            postgres    false    351            I           2606    18686 .   listadoTransferencia listadoTransferencia_pkey 
   CONSTRAINT     w   ALTER TABLE ONLY public."listadoTransferencia"
    ADD CONSTRAINT "listadoTransferencia_pkey" PRIMARY KEY (id, folio);
 \   ALTER TABLE ONLY public."listadoTransferencia" DROP CONSTRAINT "listadoTransferencia_pkey";
       public            postgres    false    349    349            M           2606    18716 j   listadoTransferenciasMasivasProductosTransferencia listadoTransferenciasMasivasProductosTransferencia_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."listadoTransferenciasMasivasProductosTransferencia"
    ADD CONSTRAINT "listadoTransferenciasMasivasProductosTransferencia_pkey" PRIMARY KEY (id, codigo);
 �   ALTER TABLE ONLY public."listadoTransferenciasMasivasProductosTransferencia" DROP CONSTRAINT "listadoTransferenciasMasivasProductosTransferencia_pkey";
       public            postgres    false    354    354            O           2606    18733 \   listadoTransferenciasMasvasArchivosAdjuntos listadoTransferenciasMasvasArchivosAdjuntos_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."listadoTransferenciasMasvasArchivosAdjuntos"
    ADD CONSTRAINT "listadoTransferenciasMasvasArchivosAdjuntos_pkey" PRIMARY KEY (numero, id);
 �   ALTER TABLE ONLY public."listadoTransferenciasMasvasArchivosAdjuntos" DROP CONSTRAINT "listadoTransferenciasMasvasArchivosAdjuntos_pkey";
       public            postgres    false    357    357            Q           2606    18747 (   listadoVendedores listadoVendedores_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public."listadoVendedores"
    ADD CONSTRAINT "listadoVendedores_pkey" PRIMARY KEY (id);
 V   ALTER TABLE ONLY public."listadoVendedores" DROP CONSTRAINT "listadoVendedores_pkey";
       public            postgres    false    359            S           2606    18763 $   logistcaPedidos logistcaPedidos_pkey 
   CONSTRAINT     p   ALTER TABLE ONLY public."logistcaPedidos"
    ADD CONSTRAINT "logistcaPedidos_pkey" PRIMARY KEY (id, "folio ");
 R   ALTER TABLE ONLY public."logistcaPedidos" DROP CONSTRAINT "logistcaPedidos_pkey";
       public            postgres    false    362    362            �           2606    19817    marcasImages marcasImages_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public."marcasImages"
    ADD CONSTRAINT "marcasImages_pkey" PRIMARY KEY (id);
 L   ALTER TABLE ONLY public."marcasImages" DROP CONSTRAINT "marcasImages_pkey";
       public            postgres    false    522            �           2606    19824 "   marcasProducto marcasProducto_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."marcasProducto"
    ADD CONSTRAINT "marcasProducto_pkey" PRIMARY KEY (id);
 P   ALTER TABLE ONLY public."marcasProducto" DROP CONSTRAINT "marcasProducto_pkey";
       public            postgres    false    523            U           2606    18788 L   margenVentasReporteUtilidadesVentas margenVentasReporteUtilidadesVentas_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."margenVentasReporteUtilidadesVentas"
    ADD CONSTRAINT "margenVentasReporteUtilidadesVentas_pkey" PRIMARY KEY (id, folio);
 z   ALTER TABLE ONLY public."margenVentasReporteUtilidadesVentas" DROP CONSTRAINT "margenVentasReporteUtilidadesVentas_pkey";
       public            postgres    false    365    365            `           2606    18858 .   mercadosListadoGiros mercadosListadoGiros_pkey 
   CONSTRAINT     p   ALTER TABLE ONLY public."mercadosListadoGiros"
    ADD CONSTRAINT "mercadosListadoGiros_pkey" PRIMARY KEY (id);
 \   ALTER TABLE ONLY public."mercadosListadoGiros" DROP CONSTRAINT "mercadosListadoGiros_pkey";
       public            postgres    false    377            b           2606    18867 "   monedasSistema monedasSistema_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."monedasSistema"
    ADD CONSTRAINT "monedasSistema_pkey" PRIMARY KEY (id);
 P   ALTER TABLE ONLY public."monedasSistema" DROP CONSTRAINT "monedasSistema_pkey";
       public            postgres    false    379            W           2606    18802 "   motivosEntrada motivosEntrada_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."motivosEntrada"
    ADD CONSTRAINT "motivosEntrada_pkey" PRIMARY KEY (id);
 P   ALTER TABLE ONLY public."motivosEntrada" DROP CONSTRAINT "motivosEntrada_pkey";
       public            postgres    false    367            Y           2606    18816     motivosSalida motivosSalida_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public."motivosSalida"
    ADD CONSTRAINT "motivosSalida_pkey" PRIMARY KEY (id);
 N   ALTER TABLE ONLY public."motivosSalida" DROP CONSTRAINT "motivosSalida_pkey";
       public            postgres    false    369            \           2606    18834    notasCredito notasCredito_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public."notasCredito"
    ADD CONSTRAINT "notasCredito_pkey" PRIMARY KEY (id, serie, folio);
 L   ALTER TABLE ONLY public."notasCredito" DROP CONSTRAINT "notasCredito_pkey";
       public            postgres    false    373    373    373            ^           2606    18849    notificacion notificacion_pkey 
   CONSTRAINT     e   ALTER TABLE ONLY public.notificacion
    ADD CONSTRAINT notificacion_pkey PRIMARY KEY ("idEntrada");
 H   ALTER TABLE ONLY public.notificacion DROP CONSTRAINT notificacion_pkey;
       public            postgres    false    375            �           2606    19537 $   nuevaCotizacion nuevaCotizacion_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public."nuevaCotizacion"
    ADD CONSTRAINT "nuevaCotizacion_pkey" PRIMARY KEY (id);
 R   ALTER TABLE ONLY public."nuevaCotizacion" DROP CONSTRAINT "nuevaCotizacion_pkey";
       public            postgres    false    497            �           2606    19552    pagos pagos_pkey 
   CONSTRAINT     U   ALTER TABLE ONLY public.pagos
    ADD CONSTRAINT pagos_pkey PRIMARY KEY (id, folio);
 :   ALTER TABLE ONLY public.pagos DROP CONSTRAINT pagos_pkey;
       public            postgres    false    500    500            �           2606    19223    surtir pedido_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.surtir
    ADD CONSTRAINT pedido_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.surtir DROP CONSTRAINT pedido_pkey;
       public            postgres    false    441                       2606    17791    pedido pedidoo_pkey1 
   CONSTRAINT     X   ALTER TABLE ONLY public.pedido
    ADD CONSTRAINT pedidoo_pkey1 PRIMARY KEY (idpedido);
 >   ALTER TABLE ONLY public.pedido DROP CONSTRAINT pedidoo_pkey1;
       public            postgres    false    236            u           2606    18963 4   pedidosPendientesSurtir pedidosPendientesSurtir_pkey 
   CONSTRAINT     v   ALTER TABLE ONLY public."pedidosPendientesSurtir"
    ADD CONSTRAINT "pedidosPendientesSurtir_pkey" PRIMARY KEY (id);
 b   ALTER TABLE ONLY public."pedidosPendientesSurtir" DROP CONSTRAINT "pedidosPendientesSurtir_pkey";
       public            postgres    false    399            r           2606    18952    pedidos pedidos_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public.pedidos
    ADD CONSTRAINT pedidos_pkey PRIMARY KEY (id, "numeroCliente", folio);
 >   ALTER TABLE ONLY public.pedidos DROP CONSTRAINT pedidos_pkey;
       public            postgres    false    396    396    396            y           2606    19003 $   productosPedido productosPedido_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public."productosPedido"
    ADD CONSTRAINT "productosPedido_pkey" PRIMARY KEY (id);
 R   ALTER TABLE ONLY public."productosPedido" DROP CONSTRAINT "productosPedido_pkey";
       public            postgres    false    405            {           2606    19017 0   productosRelacionados productosRelacionados_pkey 
   CONSTRAINT     r   ALTER TABLE ONLY public."productosRelacionados"
    ADD CONSTRAINT "productosRelacionados_pkey" PRIMARY KEY (id);
 ^   ALTER TABLE ONLY public."productosRelacionados" DROP CONSTRAINT "productosRelacionados_pkey";
       public            postgres    false    407            }           2606    19031 4   productosSurtidosPedido productosSurtidosPedido_pkey 
   CONSTRAINT     v   ALTER TABLE ONLY public."productosSurtidosPedido"
    ADD CONSTRAINT "productosSurtidosPedido_pkey" PRIMARY KEY (id);
 b   ALTER TABLE ONLY public."productosSurtidosPedido" DROP CONSTRAINT "productosSurtidosPedido_pkey";
       public            postgres    false    409                       2606    19046 0   productosSurtirPedido productosSurtirPedido_pkey 
   CONSTRAINT     r   ALTER TABLE ONLY public."productosSurtirPedido"
    ADD CONSTRAINT "productosSurtirPedido_pkey" PRIMARY KEY (id);
 ^   ALTER TABLE ONLY public."productosSurtirPedido" DROP CONSTRAINT "productosSurtirPedido_pkey";
       public            postgres    false    411            �           2606    19060 2   productosTransferencia productosTransferencia_pkey 
   CONSTRAINT     t   ALTER TABLE ONLY public."productosTransferencia"
    ADD CONSTRAINT "productosTransferencia_pkey" PRIMARY KEY (id);
 `   ALTER TABLE ONLY public."productosTransferencia" DROP CONSTRAINT "productosTransferencia_pkey";
       public            postgres    false    413                       2606    17815    productos prooductos_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public.productos
    ADD CONSTRAINT prooductos_pkey PRIMARY KEY (idproducto);
 C   ALTER TABLE ONLY public.productos DROP CONSTRAINT prooductos_pkey;
       public            postgres    false    240            �           2606    19088 *   provedoresProducto provedoresProducto_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public."provedoresProducto"
    ADD CONSTRAINT "provedoresProducto_pkey" PRIMARY KEY (id);
 X   ALTER TABLE ONLY public."provedoresProducto" DROP CONSTRAINT "provedoresProducto_pkey";
       public            postgres    false    417            �           2606    19074    provedores provedores_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.provedores
    ADD CONSTRAINT provedores_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.provedores DROP CONSTRAINT provedores_pkey;
       public            postgres    false    415            �           2606    19105 (   recordPorProducto recordPorProducto_pkey 
   CONSTRAINT     t   ALTER TABLE ONLY public."recordPorProducto"
    ADD CONSTRAINT "recordPorProducto_pkey" PRIMARY KEY ("idProducto");
 V   ALTER TABLE ONLY public."recordPorProducto" DROP CONSTRAINT "recordPorProducto_pkey";
       public            postgres    false    420            �           2606    19121 "   recordProducto recordProducto_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public."recordProducto"
    ADD CONSTRAINT "recordProducto_pkey" PRIMARY KEY ("idProducto");
 P   ALTER TABLE ONLY public."recordProducto" DROP CONSTRAINT "recordProducto_pkey";
       public            postgres    false    423            �           2606    19581     refreshTokens refreshTokens_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public."refreshTokens"
    ADD CONSTRAINT "refreshTokens_pkey" PRIMARY KEY (id);
 N   ALTER TABLE ONLY public."refreshTokens" DROP CONSTRAINT "refreshTokens_pkey";
       public            postgres    false    503            �           2606    19135 $   reporteCobranza reporteCobranza_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public."reporteCobranza"
    ADD CONSTRAINT "reporteCobranza_pkey" PRIMARY KEY (id);
 R   ALTER TABLE ONLY public."reporteCobranza" DROP CONSTRAINT "reporteCobranza_pkey";
       public            postgres    false    425            �           2606    19151 (   reporteComisiones reporteComisiones_pkey 
   CONSTRAINT     q   ALTER TABLE ONLY public."reporteComisiones"
    ADD CONSTRAINT "reporteComisiones_pkey" PRIMARY KEY (id, folio);
 V   ALTER TABLE ONLY public."reporteComisiones" DROP CONSTRAINT "reporteComisiones_pkey";
       public            postgres    false    428    428            �           2606    19167 $   reporteFacturas reporteFacturas_pkey 
   CONSTRAINT     m   ALTER TABLE ONLY public."reporteFacturas"
    ADD CONSTRAINT "reporteFacturas_pkey" PRIMARY KEY (id, folio);
 R   ALTER TABLE ONLY public."reporteFacturas" DROP CONSTRAINT "reporteFacturas_pkey";
       public            postgres    false    431    431            �           2606    19180 (   reporteInventario reporteInventario_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."reporteInventario"
    ADD CONSTRAINT "reporteInventario_pkey" PRIMARY KEY (id, "codigoFabrica", "codigoEmpresa");
 V   ALTER TABLE ONLY public."reporteInventario" DROP CONSTRAINT "reporteInventario_pkey";
       public            postgres    false    435    435    435            �           2606    19194 .   reporteVentasClienfe reporteVentasClienfe_pkey 
   CONSTRAINT     p   ALTER TABLE ONLY public."reporteVentasClienfe"
    ADD CONSTRAINT "reporteVentasClienfe_pkey" PRIMARY KEY (id);
 \   ALTER TABLE ONLY public."reporteVentasClienfe" DROP CONSTRAINT "reporteVentasClienfe_pkey";
       public            postgres    false    437            �           2606    19453     reporteVentas reporteVentas_pkey 
   CONSTRAINT     i   ALTER TABLE ONLY public."reporteVentas"
    ADD CONSTRAINT "reporteVentas_pkey" PRIMARY KEY (id, folio);
 N   ALTER TABLE ONLY public."reporteVentas" DROP CONSTRAINT "reporteVentas_pkey";
       public            postgres    false    483    483                       2606    17781    estatus status_pkey 
   CONSTRAINT     Q   ALTER TABLE ONLY public.estatus
    ADD CONSTRAINT status_pkey PRIMARY KEY (id);
 =   ALTER TABLE ONLY public.estatus DROP CONSTRAINT status_pkey;
       public            postgres    false    234            �           2606    19209 L   sucursalesAlmacenesListadoProductos sucursalesAlmacenesListadoProductos_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."sucursalesAlmacenesListadoProductos"
    ADD CONSTRAINT "sucursalesAlmacenesListadoProductos_pkey" PRIMARY KEY (id);
 z   ALTER TABLE ONLY public."sucursalesAlmacenesListadoProductos" DROP CONSTRAINT "sucursalesAlmacenesListadoProductos_pkey";
       public            postgres    false    439            �           2606    19835 $   sucursalesDatos sucursalesDatos_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public."sucursalesDatos"
    ADD CONSTRAINT "sucursalesDatos_pkey" PRIMARY KEY (id);
 R   ALTER TABLE ONLY public."sucursalesDatos" DROP CONSTRAINT "sucursalesDatos_pkey";
       public            postgres    false    524            �           2606    19239 "   tarjetaCredito tarjetaCredito_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public."tarjetaCredito"
    ADD CONSTRAINT "tarjetaCredito_pkey" PRIMARY KEY (id, ticket);
 P   ALTER TABLE ONLY public."tarjetaCredito" DROP CONSTRAINT "tarjetaCredito_pkey";
       public            postgres    false    444    444            �           2606    19255     tarjetaDebito tarjetaDebito_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public."tarjetaDebito"
    ADD CONSTRAINT "tarjetaDebito_pkey" PRIMARY KEY (id, ticket);
 N   ALTER TABLE ONLY public."tarjetaDebito" DROP CONSTRAINT "tarjetaDebito_pkey";
       public            postgres    false    447    447            �           2606    19282    ticket ticket_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.ticket
    ADD CONSTRAINT ticket_pkey PRIMARY KEY (id, ticket, codigo);
 <   ALTER TABLE ONLY public.ticket DROP CONSTRAINT ticket_pkey;
       public            postgres    false    453    453    453            �           2606    19271    tickets tickets_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.tickets
    ADD CONSTRAINT tickets_pkey PRIMARY KEY (id, ticket);
 >   ALTER TABLE ONLY public.tickets DROP CONSTRAINT tickets_pkey;
       public            postgres    false    450    450            �           2606    19300 0   tiposEnvioGastosEnvio tiposEnvioGastosEnvio_pkey 
   CONSTRAINT     r   ALTER TABLE ONLY public."tiposEnvioGastosEnvio"
    ADD CONSTRAINT "tiposEnvioGastosEnvio_pkey" PRIMARY KEY (id);
 ^   ALTER TABLE ONLY public."tiposEnvioGastosEnvio" DROP CONSTRAINT "tiposEnvioGastosEnvio_pkey";
       public            postgres    false    455            �           2606    19316 C   transferenciaIndividualArchivos transferenciIndividualArchivos_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."transferenciaIndividualArchivos"
    ADD CONSTRAINT "transferenciIndividualArchivos_pkey" PRIMARY KEY (id, numero);
 q   ALTER TABLE ONLY public."transferenciaIndividualArchivos" DROP CONSTRAINT "transferenciIndividualArchivos_pkey";
       public            postgres    false    458    458            �           2606    19334 T   transferenciaAlmacenesListadoIndividual transferenciaAlmacenesListadoIndividual_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."transferenciaAlmacenesListadoIndividual"
    ADD CONSTRAINT "transferenciaAlmacenesListadoIndividual_pkey" PRIMARY KEY (id, folio, "codigoEmpresa");
 �   ALTER TABLE ONLY public."transferenciaAlmacenesListadoIndividual" DROP CONSTRAINT "transferenciaAlmacenesListadoIndividual_pkey";
       public            postgres    false    462    462    462            �           2606    19348 D   transferenciaIndividualDetalles transferenciaIndividualDetalles_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."transferenciaIndividualDetalles"
    ADD CONSTRAINT "transferenciaIndividualDetalles_pkey" PRIMARY KEY (id);
 r   ALTER TABLE ONLY public."transferenciaIndividualDetalles" DROP CONSTRAINT "transferenciaIndividualDetalles_pkey";
       public            postgres    false    464            �           2606    19364 3   ubicacionTarjetaAlmacen uicacionTarjetaAlmacen_pkey 
   CONSTRAINT     |   ALTER TABLE ONLY public."ubicacionTarjetaAlmacen"
    ADD CONSTRAINT "uicacionTarjetaAlmacen_pkey" PRIMARY KEY (folio, id);
 a   ALTER TABLE ONLY public."ubicacionTarjetaAlmacen" DROP CONSTRAINT "uicacionTarjetaAlmacen_pkey";
       public            postgres    false    467    467            �           2606    19572    usuarios usuarios_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_pkey;
       public            postgres    false    501            �           2606    19742 &   vendedoresImages vendedoresImages_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public."vendedoresImages"
    ADD CONSTRAINT "vendedoresImages_pkey" PRIMARY KEY (id);
 T   ALTER TABLE ONLY public."vendedoresImages" DROP CONSTRAINT "vendedoresImages_pkey";
       public            postgres    false    516            �           2606    19379    vendedores vendedores_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.vendedores
    ADD CONSTRAINT vendedores_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.vendedores DROP CONSTRAINT vendedores_pkey;
       public            postgres    false    469            �           2606    19395 "   ventasEfectivo ventasEfectivo_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public."ventasEfectivo"
    ADD CONSTRAINT "ventasEfectivo_pkey" PRIMARY KEY (ticket, id);
 P   ALTER TABLE ONLY public."ventasEfectivo" DROP CONSTRAINT "ventasEfectivo_pkey";
       public            postgres    false    472    472            �           2606    19411 &   ventasRealizadas ventasRealizadas_pkey 
   CONSTRAINT     p   ALTER TABLE ONLY public."ventasRealizadas"
    ADD CONSTRAINT "ventasRealizadas_pkey" PRIMARY KEY (id, ticket);
 T   ALTER TABLE ONLY public."ventasRealizadas" DROP CONSTRAINT "ventasRealizadas_pkey";
       public            postgres    false    475    475            �           2606    19425    verPedido verPedido_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."verPedido"
    ADD CONSTRAINT "verPedido_pkey" PRIMARY KEY (id);
 F   ALTER TABLE ONLY public."verPedido" DROP CONSTRAINT "verPedido_pkey";
       public            postgres    false    477            k           1259    18911    fki_d    INDEX     M   CREATE INDEX fki_d ON public."ordenCompraArchivosAdjuntos" USING btree (id);
    DROP INDEX public.fki_d;
       public            postgres    false    387            p           1259    19543 	   fki_folio    INDEX     B   CREATE INDEX fki_folio ON public.pedidos USING btree (folio, id);
    DROP INDEX public.fki_folio;
       public            postgres    false    396    396            s           1259    18964 
   fki_follio    INDEX     U   CREATE INDEX fki_follio ON public."pedidosPendientesSurtir" USING btree (folio, id);
    DROP INDEX public.fki_follio;
       public            postgres    false    399    399            '           1259    18414    fki_historial    INDEX     A   CREATE INDEX fki_historial ON public.historial USING btree (id);
 !   DROP INDEX public.fki_historial;
       public            postgres    false    297            g           1259    18895    fki_i    INDEX     U   CREATE INDEX fki_i ON public."nuevasOrdenesCompraArchivosAdjuntos" USING btree (id);
    DROP INDEX public.fki_i;
       public            postgres    false    384            �           1259    19431    fki_idP    INDEX     ?   CREATE INDEX "fki_idP" ON public."verPedido" USING btree (id);
    DROP INDEX public."fki_idP";
       public            postgres    false    477                       1259    18342    fki_idd    INDEX     P   CREATE INDEX fki_idd ON public."fichaClienteDireccionesEnvio" USING btree (id);
    DROP INDEX public.fki_idd;
       public            postgres    false    287            �           1259    19459    fki_ido    INDEX     A   CREATE INDEX fki_ido ON public."reporteVentas" USING btree (id);
    DROP INDEX public.fki_ido;
       public            postgres    false    483            �           1259    19094    fki_idp    INDEX     F   CREATE INDEX fki_idp ON public."provedoresProducto" USING btree (id);
    DROP INDEX public.fki_idp;
       public            postgres    false    417            h           1259    18896    fki_n    INDEX     U   CREATE INDEX fki_n ON public."nuevasOrdenesCompraArchivosAdjuntos" USING btree (id);
    DROP INDEX public.fki_n;
       public            postgres    false    384            Z           1259    18840    fki_r    INDEX     E   CREATE INDEX fki_r ON public."notasCredito" USING btree (id, folio);
    DROP INDEX public.fki_r;
       public            postgres    false    373    373            �           1259    19293 
   fki_ticket    INDEX     C   CREATE INDEX fki_ticket ON public.ticket USING btree (id, ticket);
    DROP INDEX public.fki_ticket;
       public            postgres    false    453    453                       1259    18269    fki_u    INDEX     E   CREATE INDEX fki_u ON public."entradasCajaGeneral" USING btree (id);
    DROP INDEX public.fki_u;
       public            postgres    false    276                        1259    17782    fkii_Id    INDEX     ;   CREATE INDEX "fkii_Id" ON public.estatus USING btree (id);
    DROP INDEX public."fkii_Id";
       public            postgres    false    234            n      x������ � �      o      x������ � �      p      x������ � �      �      x������ � �      q      x������ � �      r      x������ � �      s      x������ � �      t      x������ � �      u      x������ � �      v      x������ � �      w      x������ � �      x      x������ � �      y      x������ � �      z      x������ � �      �      x������ � �      }      x������ � �      {      x������ � �      |      x������ � �      }      x������ � �      ~      x������ � �            x������ � �      �      x������ � �      �      x������ � �            x������ � �      �   7   x�37�442���Ē���b��p�����������!2��ЄӀ+F��� <��      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      x      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �            x������ � �      �      x������ � �      �      x������ � �            x������ � �            x������ � �            x������ � �            x������ � �      	      x������ � �            x������ � �            x������ � �      �      x������ � �            x������ � �            x������ � �            x������ � �            x������ � �      !      x������ � �      �      x������ � �      �      x������ � �      $      x������ � �      '      x������ � �      �      x������ � �      )      x������ � �      +      x������ � �      -      x������ � �      /      x������ � �      1      x������ � �      3      x������ � �      5      x������ � �      7      x������ � �      9      x������ � �      <      x������ � �      ?      x������ � �      �      x������ � �      A      x������ � �      D      x������ � �      G      x������ � �      K      x������ � �      {      x������ � �      M      x������ � �      O      x������ � �      �      x������ � �      Q      x������ � �      T      x������ � �      W      x������ � �      ]      x������ � �      Z      x������ � �      _      x������ � �      f      x������ � �      b      x������ � �      h      x������ � �      k      x������ � �      �      x���Y�n�Q������깺� DDBcP�|S=Y�����=��� �"o�=|�Z��U�P�_���ߟ���O|;?�������z���O1�O���W
)�Y��_×_�?}�ݿ����9��q����]���_���_���_�����?��_����o۷���7������u~��������o�����_��L���m��?Ǒ�������f ��~�	!�P��2J{��Ϗ���z�Wz����]_��:�W<�����S�~��=��hԿtR���3��\�=�4��%W}�Xɳ�<y���Ȗ����D�=����k����<����w),1�N|�r�)� Sc|Y�yъ�K���O�K��״P�}�3���\�_y_zE宺Z�r]�W�+ f=�
sJ-?�,�j�8	~,� �xC�)�_�4�a	z��+�+5�x#�o����?Ɛ]�xW�h4���x�~��w��F�c*/�
�иs"ۜ׬��������v_�)���؝\���֞��^[�!��H�XB��3U+�l.tr'��]�p���g�
\��Iֺ��5s��{M��U|��̒P��6�m���y���	Vi^���V-�x�6yh�}jI��;o�6Xf��W��7/��Xu�ӫ����<��a���L�z3���0�ܖ��c�3��l�"�b'�ec'O���f �m�?sSJ��b���J���ʻVb�G��2���-#��{�����j嵾w>,�:�������f�s�s=ob���q�y�)y��.�E�s�j�tFè��g���2���N���n�pZ���-�-;�
(�5��s3u�!�Un/���ʺc�as���H�yw��T��n3�]�J�\��x�w�ccZ�»����w�P��Ui�v9��fYwX���J�w]�62.���Rؽ��r�M�zG�Y�pˇ�$̋�ęgu�i���"I7���a�V賣�@}t�����R  ���-oO�0�|&�-Ģ��*`C���!��g�it�z&���r�-�+������C��Q�uN��d[vF��Q����V���-s7�.�8�ԏhF���l�����U樌�������}H�2K�z�-F.����Fޱs�Z��I3r� �Ӫ֧���&�Fw'9U���8�wt;�8vvv�|��fm<gڤ����me{3���m�Nҗ��?Zf;��n������(5L�S"��h��fˣ�Ӊ��o��V����ȐX��6Ei�8$�-#������r̀��u��c��1A���FjLM�B)�6x��d�9ξ�#̬�h���mn"���ƨ�A	�H��l|��P��f�,F�R
�����0eE������g ��L�+ u
��J�nYk�Ko��_#V���SCNErݝ�F��:&���r�3N�BM�]\�G�.�T_:�X>���FS]���V�l{-��⎵Kb��p\�L�����Y�#�7V��%o� 6���Px�m H��4F�L���V�O+#�A��ow�V'"��s�`��=��3�ER���$5�мf3+%[�R��oio�C;db`��� �]A을��"�|y��݀m�d�@.�l's��	g�#AKp�[��Qc}:lI��J4������.����Jp*��䱷R�D6�6��7P�4���>��ēA���P,ݛ`��ư�Ne,�� dP�B�mnڨ#@Y�Rvd��;��S�ބ)�z4�f�C�Q�i;�I��G��Ud��Zb�{̅�Y��	v.���՛�R
a8��MY�7S��N�r3�'�(� ,] �!-�2T�Yi)�X_ۍL-��L�z�w�/At�o0!����;�Pb'�̢E�w#(�/�k�(�Vȵ��L�dQ�n�L���z��* b����%�"��+A\��AƠ��{���qq��"w�cA���~	�#R�lC����X���v��n�H!��B��̼�jD�N�?�7T#��
S.��d�W��MI�+ 3����W�G��^7D@y�Bs+d�aK���a�����'�����~��D*���#2@wP�aD�ʡ@��d�$.av�d�
�0���D��J�gF�p�e�&���_����3��-�Dtu��I��#1J%����
B�,1
��0A�� �C�_q��'b����LR���,d>��9�hnX�܆.7��F3sD:I� ����ClX��Had���A�e\�+%C�a(R\b%`2���MB	$!x&�XI21�P��N��nKA%��E�h�Q B.�N��eJ�A
�QeM[F��lb��H������	+�ʑ�TS�xP�Tk��@���c�!.ڌ�jE����'fHi��$�mN~!�{��g7�K��r%��P�6�2A�R0���[YY7�Py7in�I��"�����Ef�!=g!��H��E�#UݜlBw�ƌ�t%��Uҩ�HI��߼ �o�M�r@� ��y��$�O�ڱYԺ�Y0%@�0����mr��	��q1j����`#��l��ꞅ\�]�Q�0uV"�8k�%FH�Saلx��Y�-P/�(�4y�L�('���-&yUR`�
o� �'3�����݀0�*����5��>d 'Ɇp��N7�Ç��KԡHDܬ_��/�)Ce�
lW��$���:k
WU7s8�\Aη��@̌��a��	���h����D�"B4����n��eE�8SG� 2�I�Q �R�Il#e�1R���gL�ⰸ����Kt�3��1E�kN#�yb�g^�Ԗu	�+��%�ڤҩ+�lgLg�Y�d��p@}H�TL�p&�@�0�K}%�M��০Ly���$���)`t���n�*��2 ��@e*77tA�x)�!�S��N�ePLf�R�9<ʚa��B�biTs��"��р��0~o��)A�
�BE�������-Gf#v�,�Re����L��9���P%��Ĺn����P<�ԅ��
+��q	�����E�������s��e7�~��r��c]X�e߆^A9�c1d�P^#w	V��%�_�@�A�#����sv�@�S@8΂��.�0��1E��GA�H�����8�T8NM4+��:�ݘy�7 ؗ4D��;��WE���Y��E͒y�b���X�kj+&bNƅ"�C�;�y3��H.�1~��-���]���w8�r%"|�u� ��k�` '&�:a�'���I�l�XpA�̫����#>��.�&"�I ��c�kyj5��% 	��.�wT�A�pq(���<x��=Y
�,	�
����� ���X�i.�rDLD�,q�����N��EO�\�z.���j)&�Ɉ�x�H4�+=vኈ7����A沩AD�NÈ� �M=�6!z j�M������f�a;;>L�� ��Jt"�uQA� *�Yv��{�(���~�(*!:�E���A��%-�\$�:1��J�r���Z���w��5hq�r`��"ToWw M�/Ȅf×C�.�����#�"�x�&��G�z@䂖g��hH֫R"0�>��C>ݸ�>�d_�V�D����zr-�
K����Pߵ�g?l�"�$>�g���Du+�;�`�uB5��-�+���a��B- � ��� *�f�8g�@�!G�>�A�d3���ї!�/��_�8���>����`�PF7{s��2Z��M*���B��D� uA)�'��@4#�����Ppu��h��U"�jxd�]���l�Z'�e�h�у��btL����G��U�#
lS�7A�D+dխ67$�q��Brܠ��E�����+��҆$�zO9�8j��y�������h�Z�R%�<@e��i��HIȃ�-�X�
�U�ph�(P�M4��HY��8�#5�)L�а��p�z*�*�{DJ�!̄b��_����F� .��(45�}+��/8H�������@�
&\�\)�`���[�������_�*��%�"Z`����0	t��̤��:�	��aj7jE��Ӥ���?&Tڹ�׋�    
j�!z��\
��/n�D�1�Z8�q)�D?�#�F����}�Y�;h�Ǩ˃�I���A�+��D�m& Q���b��K�#���(a�s�M��D �#An�n�'�;��A�8����y�W��e:�t'��*%�0������'�T@i�z&�����j�8e�)$5	Y�^Gb�W�����q�����ޭyՋF��d�ys�f6�=4��UBIho{�����6.��Qi�Ӳ���wgA�3j��l�5@����.DC�D�IC�m
�5&��1�a;�H�lc=�A6S�`y�<��/�$vu�Y�yI�v�Tu�UB���0n�*{��I�E���@ˡD^�u'ˋ�%�*�R��,\@�'�nN�Vt�>�(.��J `�pA-��Y������Ⱦ1�����&�rCu��av��T��	{�ZuU�j"ȿ��x�!ƺ9�����b����t���]���M3Ll�87%6����̞��+�Т��0Q ��.)���&��v�?6��dt��,�Q�U!��h�:^�N�2u�~��� ��@!n,���L���e�Y���~�Qˬ���,�����rtJu��8(q���}��''��o�P�PT&uP���H�y	܉�����/�?I��}qu�]�+�J�֮�.)3a�F��j�$W%8�� ��S��(ɩM�U7lj3��nBe�Wx�P��hbg�dujMl�
�JN��g����x�6�][�\�0���2ב�wfm	¬o�+�A��\�P�B�$53��kktm��#]��ޡ�����<�]� ���c$����� �'���П�"`�rQ�M[Hh.�C�Dm,u� N#�dP2l�m3@ -��~ah��
⑭Y���J��)CM5�a���UBb��]䂸�����֎bb��S���-�@�c�Z�ۘ<q$g��A���H\ ܢZA��ZK����gf�$9Q`S��Cq��:)�����*!D�|&�n3�b�N̢�*"��cP�Gמ:b
�#/���&AY�䇺UI��`�2Y�kw	��p����n�t���1`'��buHq2�m"ǒ��J\*�[�(���y

�uG�#=p��]�}Yg�z��p�a��*��	i�c��F w��sA:�2� �8͡Ft�
k����Ն����Pg����]r�0J����­Q֠w����%\�ɠ �"�aLr%f����DhQ����ʄ=�HF!t��B�
�ob���G���#D�F��o�4��'m{ s./&�����*ZK��Q�.M!´���NY�A7��-�U�$D5z���l��'��;5�t�_^��a����!GP)r�@ ���:�jn��I6R'!,I�2|���O2��!���D���H@E�%Xb�T�d0U�l�j��(��5N��K��9�N�NW}\0εo��"=�6�ҵc��f�Eln���	uD$���!��j�S����P	�ȡ�Б�QT�/^�.�A�Heޮ�5�F�	�oT$������ d�Z��:b��r��Y���SU�P� "�u�#�\a�¡���mЍ��vo����]��dEfDm��$I�QM:�K�g[-�7�w@rA]T-PʺmV f�� �!K[^H|�mB�L	����S��Q����@H۫M2�>�^��f�(�N�5�h<uɴ�a���	�P��1Ytl("��ZH����;ˣ�,ܪ$�� =N�L�X���o¬�n����Z���@�����0�xe��-4T�;p���R=�Z�H����v�3G.�~@[��ִ{#M	_��=fT^�+rÓ��Z m��u����9�إd%��NB���c�z@��E��� ���*av��l��<�ڰ��t�@S�U� O`I�
#����@������	������b�up��`j���T6��3L������d�7��&�,��)�t�V!��Jy#�u�+�T���M�v���5�G2Z�
��S0�P1�:��8��:��A���$ڵ�ȼ^lسXa��	��	P��H��,�L������n� gL���BӖ[��i�v�k��G���m��X��wbF	��V���7�3�ۄ�	��EU藦^���4L�L�Mm:#[�z%Hv�Y�boR�I:���:;�Jig-*��EH�p���)ϙ9>�N������k�v�$ю��Ừw�,t
^_P�Qelk�ỶC�%\=k�$^oS.�;St� u��Md,���dB+�u�Łm�6.��L���; w`L!��@��@]��p�����$ �O+��- Ug�;���.�r��� XW�����!�ט3�	��P]�Y�2,�!`C�\ p�}Z`̚ ��J�q?����7�R�A�K7�"�Ɇ{�v������B�:�@�O��(�
'<�\��JZ K竨t�?��0�S,�8�Z^ء�������~��Z��252��SJ�@5�7����aI�^����+ǰe��X2h��3�N
��:[�^Z���L�/Ģ�� �C���z�HAzW�m,���>��:�L���CjN֏:��uI�lW̓�V�Y(
�k�:�!�Q.T.�U������.��x3�(0o�E�%$?��A����B"D��כ��4U�;�aӰ)I��;1zov�0(�b���N䌋 ��l�	:Ě�:ڶ_�H�v��`70@�b�>VRG��K{Od⃨��4:��z�Hͤ�.��1�eZ�-�s�U 22���:���H)�5.����t@�:
�d�H�eURVS�S </��e�16��$��7�%d^�@k��HW�!�0m�܆�����U����F"ԑ�^u�+����Y·�kk|��D��8��~f�� �A4�b�m�x�"���o棝�Ɗ�_V��ԩ	ܐ�����}�d��l�n >
mC�	I}޲��6�����R��9h40�a�����,Ю�u�vU�ʵx!�ʍ}��W|-
2VlJ��Y.W� �ӵ1s�`���O�(�/���6�Jtj��"�)�!r@�V$nj?�K$j;���y
�	�a���:# Å�;�0D�,��J�a�� >/aqGeC}m��t�C�w�9��f:��|��u΃���F�, 
�-�3�H��v� R\'�IM5���Q6��q"�K$���Le$ħ/m��0�T=��(ꤴ��f$8j�B��i��
� ڬA�)��uDc�]��<L�{�S�·�1�z�5Y�����uc:(;1JM'��	�؝GՂW�{����^�ɫ倍�6>զD�ύ-�er��;� �{���ֹ4U�����z4��/�C����^��G�7Y���a荒�1�GKE;�����Y���էw\�ԑOQ��֦�t�A�^AB�2m���N~�s��F��S:K c������';m"XWKݎ=�a���6�C֙� ��-!���U37/(�S
��p����{����:HK�qY�]�,ex5{��X�z�ê�D��;�%����Q��j�K��#j@b��h���� G�����&���;:�HB���A8����OW7i��&��$��Yݙ���	��K<P�:h3�6��Yc��LO:ُ4G4�@��C�tO$q��|7����u{���M�n a7�����|G�,�D���$Z�~���+V��ʛ�@���iQM3Mm`��}hڮ��61��9�KI��(:�+!��u�~
����L��DՀ��]q����QCh���L
H�u6�	�$��\��SF�5q��e��V��q�VL����M�z��9,;/�jA�^�>k�F�X݇d�9/�OP��:[t@���EQ�&q�MU��O�B���Y{�����Eu��_�)X�O�w��.{Ek�@du�,�o���.ڳ-R�bSĪDL�&
�����>MeVĳiσlm��zQ:qs�����Yc�Q	a�A1kHon���$׭�2��t
   U�X���f&�j:���a��$u�P.0x}��Ј��䡣sa��y�)MƩ>OG�������.���Y���g���HZ���+����N�����7��	h�v0RVK�.1Sg�p�#h]��X�)Uf:@��A"j�W��DΒ�];,:�0�۪�����i�(:�1�YMC�T�d�	��N��j]� t���W�*G}�-:�X"\�[�b��X���]��N�g�����}����}��'���4m-���&7A��tUUSD�pk�p���p�j����<���MI���/��#f�O,2� /��7d��Ío\M��#l� "�Yb�/��\�E��ʎ4��k��Z�Qe�S�H�������I`80�`$0�#O+ɿ�):V��W� Ѷ'ӛ 2l������{�7t�7c��֫Ih�GB΋�$.�5x�%o�C�o���� +�cY�Y�+YWSM;�0���1-)�!��i�s��Ў:z���u�?e�������I(�̲�h�{��@���9	��H��TU.z�Xu�Y2)���$��!J�J}ĦOU�AD�
�M���-\}�C�m�ub:DtD@�6o��� .G05h�A;?&(A0$}��t�����Lw�sMKK�f�ѾSC��Nh5��>����o\���v�Ȩ��}C>N�(Y��4Y)X�䔦���*���a��>�� F{5<LfQ�i�I���C 4���EJ���5��ULGt�.NA)���U2��O��u.&�)Yǅ��ۨ�s�����i�I�z���y�^�Ч�.yt�;��>E��f �s����}��4��\{�� ��mʹ��*%��"ʤ�*���B8Z���*o}�M���av�� ��-�C��}�7���:j2�.���)^������ϸ\�|Lq�GU[��d��O��j�'����q/tj��?�5�#�EQg���/��Y�ME���[h�s�s�:��d����ǉ�S��$J�\��Ah��V�_�8�<�A�c�1���}����� g6�P      m      x������ � �      �      x������ � �      p      x������ � �      s      x������ � �      u      x������ � �     