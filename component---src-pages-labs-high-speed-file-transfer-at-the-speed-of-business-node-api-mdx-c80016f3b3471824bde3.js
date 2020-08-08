(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"+Q9u":function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return l})),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return c}));var n=a("wx14"),r=a("zLVn"),o=(a("q1tI"),a("7ljp")),i=a("013z"),l=(a("qKvR"),function(){return Object(o.b)("span",null,"High Speed File Transfer at the Speed of Business")}),s={},p={Title:l,_frontmatter:s},b=i.a;function c(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(b,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",null,"Starting a Node-to-Node Transfer with the Aspera Node API"),Object(o.b)("p",null,"You are now familiar with the Aspera CLI, Native Client and the Aspera Browser Client. If\nyou find you would like to take advantage of the transfer speeds, reliability and security\nprovided out of the box by the FASP protocol but don’t want to be handling transfers\nmanually you can use the\n",Object(o.b)("a",{href:"https://developer.ibm.com/api/view/aspera-prod:ibm-aspera:title-IBM_Aspera#Overview",parentName:"p"},"Aspera API"),"\nto programmatically trigger transfers."),Object(o.b)("p",null,"In the previous sections you have performed an upload and a download, there are API’s\navailable that and many other workflows but in this section you will be focusing on the\nthe API for a node-to-node transfer, i.e. triggering a transfer from one Aspera server to\nanother. In this section you will move the file ",Object(o.b)("inlineCode",{parentName:"p"},"100MB")," from the CP4I cluster to IBM Cloud\nObject Storage (ICOS) located in the IBM Cloud in Dallas using the ’\n",Object(o.b)("a",{href:"https://developer.ibm.com/aspera/docs/node-api-reference/",parentName:"p"},"Aspera Node API"),"‘."),Object(o.b)("h2",null,"Lets Go"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Navigate back to the Terminal on the Developer machine.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Move to your Home directory if you are not already there:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{className:"language-bash",parentName:"pre"},"cd ~\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Print the contents of the secret that was downloaded in the previous section:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{className:"language-bash",parentName:"pre"},"cat lab5352_secret.txt\n")),Object(o.b)("p",{parentName:"li"},"This is the transfer token that will be used to authenticate the API request.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Execute the API call making sure you substitute the two placeholders."),Object(o.b)("p",{parentName:"li"},"This API call will initiate an Aspera transfer between the source node, the CP4I\nOpenShift cluster and the remote node, an Aspera Transfer Server running as a service\nin IBM Cloud Dallas connected to IBM Cloud Object Storage."),Object(o.b)("p",{parentName:"li"},"Replace the following placeholders:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"TOKEN_GOES_HERE"),": Should be replaced with the token printed in the previous step.\nEnsure you keep the space after the word ‘Basic’, the token ends with two equal signs\n",Object(o.b)("inlineCode",{parentName:"li"},"=="),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"YOUR_FILENAME_HERE"),": Create a unique filename for your file, you can use your lab\nstudent number as an example. All lab attendees will be sending their file to the\nsame IBM ICOS bucket so this way you can identify your file.")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{className:"language-bash",parentName:"pre"},'curl -ki -u my_access_key:my_access_key_secret -X POST https://asperahsts.apps.demo.ibmdte.net:443/ops/transfers -d \'{"direction": "send", "remote_host": "ats-sl-dal.aspera.io", "remote_user":"xfer","token": "Basic TOKEN_GOES_HERE","paths": [{"source" : "/100MB", "destination": "/YOUR_FILENAME_HERE"}]}\'\n'))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Once you make the POST an Aspera ‘Transfer Spec’ will be returned. There is a lot of\ninformation here but you only need to focus on the ID.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Check the status of the file transfer by querying the ",Object(o.b)("inlineCode",{parentName:"p"},"/ops/transfers/:id")," endpoint\nsubstituting your ID returned in the Transfer Spec. Replace ",Object(o.b)("inlineCode",{parentName:"p"},"TRANSFER_ID_HERE")," with the\nID from the previoud step."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{className:"language-bash",parentName:"pre"},"curl -ki -u my_access_key:my_access_key_secret https://asperanode.apps.demo.ibmdte.net:443/ops/transfers/TRANSFER_ID_HERE\n")),Object(o.b)("p",{parentName:"li"},"If successful the status will be ",Object(o.b)("inlineCode",{parentName:"p"},"completed"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Navigate back to Aspera on Cloud in Firefox and select ",Object(o.b)("inlineCode",{parentName:"p"},"All Files")," from the breadcrumb\nto get back to your home view.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Select the ",Object(o.b)("inlineCode",{parentName:"p"},"IBM ICOS - Dallas")," folder to browse the Dallas based Object Storage you\njust sent to."),Object(o.b)("p",{parentName:"li"},"You will now be able to see the file named with your custom name. Note: Due to caching\nyou may have to wait and refresh after a few minutes before your file appears."))),Object(o.b)("h2",null,"Recap"),Object(o.b)("p",null,"You have successfully initiated a remote transfer via the\n",Object(o.b)("a",{href:"https://developer.ibm.com/api/view/aspera-prod:ibm-aspera:title-IBM_Aspera#Overview",parentName:"p"},"Aspera Node API"),"\nbetween a CP4I OpenShift Cluster with NFS attached storage and an Aspera Transfer Server\nrunning in IBM Cloud connected to IBM Cloud Object Storage located in Dallas."),Object(o.b)("p",null,"Next up you will see how simple it is to now move your file between clouds; from IBM Cloud\nObject Storage in Dallas to AWS S3 in Frankfurt."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-labs-high-speed-file-transfer-at-the-speed-of-business-node-api-mdx-c80016f3b3471824bde3.js.map