<script lang="ts">
	export let data;

	function price(value: string | null) {
		return value === null ? 'Ikke tilgængelig' : `${value} kr.`;
	}
</script>

<div>
    <div>
        <div>
            <h1>Iphone Reparation Priser</h1>
        </div>
        <div>
            {#each data.iphonerepairs as p}
                <div id="iphoneName">
                    {p.name}
                </div>
                <div>
                    <div><span>Skærm:</span><span>{price(p.screenprice)}</span></div>
                    <div><span>Batteri:</span><span>{price(p.batteryprice)}</span></div>
                    <div><span>Bagkamera:</span><span>{price(p.backcameraprice)}</span></div>
                    <div><span>Bagkamera Glas:</span><span>{price(p.backcameraglassprice)}</span></div>
                    <div><span>Frontkamera:</span><span>{price(p.frontcameraprice)}</span></div>
                    <div><span>Bagcover Ramme:</span><span>{price(p.backcoverframeprice)}</span></div>
                    <div><span>Bagcover Glas:</span><span>{price(p.backcoverglassprice)}</span></div>
                    <div><span>Opladningsport:</span><span>{price(p.chargeportprice)}</span></div>
                    <div><span>Højttaler:</span><span>{price(p.speakerprice)}</span></div>
                </div>
            {/each}
        </div>
    </div>
    <div>
        <div>
            <h1>Ipad Reparation Priser</h1>
        </div>
        <div>
            {#each data.ipadrepairs as p}
                <div id="ipadName">
                    {p.name}
                </div>
                <div>
                    <div><span>Skærm:</span><span>{price(p.screenprice)}</span></div>
                    <div><span>Batteri:</span><span>{price(p.batteryprice)}</span></div>
                    <div><span>LCD:</span><span>{price(p.lcdprice)}</span></div>
                    <div><span>Hjem Knap:</span><span>{price(p.homebuttonprice)}</span></div>
                    <div><span>Frontkamera:</span><span>{price(p.frontcameraprice)}</span></div>
                    <div><span>Bagkamera:</span><span>{price(p.backcameraprice)}</span></div>
                    <div><span>Opladningsport:</span><span>{price(p.chargeportprice)}</span></div>
                </div>
            {/each}
        </div>
    </div>
    
</div>
<style>
    div {
        margin: 10px;
    }

    h1 {
        font-size: 24px;
        font-weight: bold;
    }

    span {
        margin: 5px;
    }
</style>