<template>
<div class="hero">

<span class="tag">
ESTABLISHED 1905
</span>

<h1>
Exemplary
<span>Christian</span>
<br />
Education for Life.
</h1>

<p class="description">
A leading Christian institution in the Philippines,
Central Philippine University nurtures intellectual
growth and spiritual development through a commitment
to Scientia et Fides (Science and Faith).
</p>

<div class="buttons">

<button class="primary">
Explore Academics
</button>

<button class="secondary">
Request Information
</button>

</div>

<div class="stats">

<div class="stat">
<h2>118+</h2>
<p>Years of Excellence</p>
</div>

<div class="stat">
<h2>20+</h2>
<p>Academic Programs</p>
</div>

<div class="stat">
<h2>5,000+</h2>
<p>Active Students</p>
</div>

<div class="stat">
<h2>20+</h2>
<p>Partner Institutions</p>
</div>

</div>

</div>
</template>

<style scoped>
.hero{
display:flex;
flex-direction:column;
}

.tag{
color:#CBA100;
letter-spacing:3px;
font-weight:600;
margin-bottom:20px;
}

h1{
font-size:4rem;
line-height:1.1;
color:#2B1B5E;
}

h1 span{
color:#9b7a16;
font-style:italic;
}

.description{
margin-top:25px;
max-width:650px;
line-height:1.8;
color:#555;
}

.buttons{
display:flex;
gap:15px;
margin-top:30px;
}

.primary{
background:#2B1B5E;
color:white;
border:none;
padding:14px 28px;
border-radius:8px;
}

.secondary{
background:white;
color:#2B1B5E;
border:2px solid #2B1B5E;
padding:14px 28px;
border-radius:8px;
}

.stats{
margin-top:40px;
background:white;
border-radius:16px;
padding:25px;
display:grid;
grid-template-columns:repeat(4,1fr);
box-shadow:0 4px 12px rgba(0,0,0,.08);
}

.stat{
text-align:center;
}

.stat h2{
color:#2B1B5E;
}

.stat p{
font-size:.85rem;
margin-top:8px;
}

@media(max-width:768px){
.stats{
grid-template-columns:repeat(2,1fr);
gap:20px;
}
}
</style>