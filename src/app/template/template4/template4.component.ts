import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { debug } from 'console'; 
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'; 
@Component({
  selector: 'app-template4',
  templateUrl: './template4.component.html',
  styleUrls: ['./template4.component.css']
})
export class Template4Component implements OnInit { 
  @ViewChild('content', { static: false }) content: ElementRef;
  @ViewChild('contentHTML', { static: false }) contentHTML: ElementRef;
  @ViewChild("screen") screen: ElementRef;
  @Input() data: any;
  @Input() show_expand_icon: boolean;
  today = new Date();
  resuem
  constructor() { }

  ngOnInit() {
    this.data = {
      heading: {
        id: 635,
        user_id: 55,
        first_name: 'Anil',
        last_name: 'Shamra',
        address: 'New Delhi',
        city: 'Delhi',
        postal_code: '110059',
        phone: '9865326598',
        email: 'anil@gmail.com',
        resume_pic: '',
        job_title: 'UI developer',
        country: '',
        template_id: 1,
        color_name: 'orange',
        personal_details: 1,
        hobbies: 1,
        language: 1,
        show_language_level: 0,
        course: 1,
        reference: 1,
        publication: 1,
        internship: 1,
        extra_activity: 1,
        driving_licence: 1,
      },
      experience: [
        {
          id: 368,
          heading_id: 635,
          job_title: 'Human Resources Recruiter',
          employeer: 'db',
          start_date: '2022-01-16T06:11:14.000Z',
          end_date: '2022-08-16T06:11:16.000Z',
          city: 'delhi',
          currently_working_here: false,
          experience_description:
            '<ul id="1"><li>Provided customers and users of various software systems the information needed regarding maintenance requirements to qualify for OEM warranties and to follow industry best practices.</li></ul><ul id="2"><li>Coded customized applications for users to convert raw data from design engine to easily understood graphics</li></ul><ul id="3"><li>Assisted client stakeholders by collaborating with support team to explain, troubleshoot, and resolve emergent technical issues.</li></ul><ul id="4"><li>Collaborated with database architects and administrators to outline client system limitations for capacity and load for [Type] data and processing projects.</li></ul><ul id="5"><li>Directed and developed full life-cycle tests and trials of multiple software such as [Type]. </li></ul>',
        },
        {
          id: 389,
          heading_id: 635,
          job_title: 'Financial Analyst',
          employeer: 'db',
          start_date: '2022-01-19T11:44:26.000Z',
          end_date: '2022-11-19T11:44:29.000Z',
          city: 'delhi',
          currently_working_here: false,
          experience_description:
            '<ul id="1"><li>Provided customers and users of various software systems the information needed regarding maintenance requirements to qualify for OEM warranties and to follow industry best practices.</li></ul><ul id="3"><li>Assisted client stakeholders by collaborating with support team to explain, troubleshoot, and resolve emergent technical issues.</li></ul><ul id="4"><li>Collaborated with database architects and administrators to outline client system limitations for capacity and load for [Type] data and processing projects.</li></ul><ul id="5"><li>Directed and developed full life-cycle tests and trials of multiple software such as [Type]. </li></ul><ul id="6"><li>Controlled and directed installation of [Type] and [Type] software systems and explained new features of the design, purpose, and implementation to the team using the product.</li></ul><ul id="7"><li>Designed cross-platform software to increase serviceability and produced performance data.<span>Provided customers and users of various software systems the information needed regarding maintenance requirements to qualify for OEM warranties and to follow industry best practices.</span></li><div>Assisted client stakeholders by collaborating with support team to explain, troubleshoot, and resolve emergent technical issues.</div><div>Collaborated with database architects and administrators to outline client system limitations for capacity and load for [Type] data and processing projects.</div><div>Directed and developed full life-cycle tests and trials of multiple software such as [Type].</div><div>Controlled and directed installation of [Type] and [Type] software systems and explained new features of the design, purpose, and implementation to the team using the product.</div><div>Designed cross-platform software to increase serviceability and produced performance data.<span>Provided customers and users of various software systems the information needed regarding maintenance requirements to qualify for OEM warranties and to follow industry best practices.</span></div><div>Assisted client stakeholders by collaborating with support team to explain, troubleshoot, and resolve emergent technical issues.</div><div>Collaborated with database architects and administrators to outline client system limitations for capacity and load for [Type] data and processing projects.</div><div>Directed and developed full life-cycle tests and trials of multiple software such as [Type].</div><div>Controlled and directed installation of [Type] and [Type] software systems and explained new features of the design, purpose, and implementation to the team using the product.</div><div>Designed cross-platform software to increase serviceability and produced performance data.</div><p><br></p><p><br></p></ul>',
        },
      ],
      education: [
        {
          id: 197,
          heading_id: 635,
          school: 'DU',
          degree: 'BCA',
          own_degree: '',
          graduation_date: 2011,
          city: 'Delhi',
          education_description: '<p>Education Heading2</p><p></p>',
        },
        {
          id: 198,
          heading_id: 635,
          school: 'DU',
          degree: 'Bsd',
          own_degree: '',
          graduation_date: 2011,
          city: 'Delhi',
          education_description: '',
        },
      ],
      skills: [
        {
          id: 367,
          heading_id: 635,
          skill: 'Css',
          skill_level: 'Experienced',
        },
        {
          id: 368,
          heading_id: 635,
          skill: 'Html',
          skill_level: 'Skillful',
        },
        {
          id: 369,
          heading_id: 635,
          skill: 'Java',
          skill_level: 'Experienced',
        },
      ],
      summary: {
        id: 141,
        heading_id: 635,
        summary:
          '<p>Provided customers and users of various software systems the information needed regarding maintenance requirements to qualify for OEM warranties and to follow industry best practices.</p><p></p><p>Coded customized applications for users to convert raw data from design engine to easily understood graphics</p><p></p><p>Assisted client stakeholders by collaborating with support team to explain, troubleshoot, and resolve emergent technical issues.</p><p></p><p>Collaborated with database architects and administrators to outline client system limitations for capacity and load for [Type] data and processing projects.</p><p></p>',
      },
      personal_details: {
        id: 82,
        heading_id: 635,
        nationality: 'Indain',
        dob: '2022-02-07T18:30:00.000Z',
        visa_status: 'NA',
        marital_status: 'Single',
      },
      hobbies: null,
      languages: [
        {
          id: 125,
          heading_id: 635,
          language_name: 'English',
          level: 'Advance/Mid',
        },
        {
          id: 126,
          heading_id: 635,
          language_name: 'Hindi',
          level: 'Advance/Low',
        },
        {
          id: 127,
          heading_id: 635,
          language_name: 'Punjabi',
          level: 'Intermediate',
        },
      ],
      courses: [
        {
          id: 59,
          heading_id: 635,
          course_name: 'Video Editing',
          institute_name: 'barthadian ',
          start_on: '2022-01-19T12:02:16.000Z',
          end_on: '2022-11-19T12:02:19.000Z',
        },
      ],
      references: [
        {
          id: 58,
          heading_id: 635,
          referent_name: 'Rahul Kumar',
          company: 'Db Tech',
          phone: '9865326589',
          email: 'rahul@gmail.com',
        },
        {
          id: 59,
          heading_id: 635,
          referent_name: 'john Daniel',
          company: 'Db Tech',
          phone: '9865326565',
          email: 'john@gmail.com',
        },
      ],
      publications: [
        {
          id: 63,
          heading_id: 635,
          article_title: 'Python',
          publication_title: 'Python3.2',
          publication_date: '2022-02-21T00:00:00+00:00',
        },
      ],
      internships: [
        {
          id: 52,
          heading_id: 635,
          job_title: 'Senior Software Developer',
          employeer: 'Cloud Lab',
          start_date: '2022-01-19T12:00:34.000Z',
          end_date: '2022-11-19T12:00:36.000Z',
          city: 'Delhi',
          currently_working_here: false,
          experience_description:
            '<ul id="1"></ul><ul id="1"></ul><ul id="2"></ul><ul id="1"></ul><ul id="2"></ul><ul id="3"></ul><ul id="1"></ul><ul id="2"></ul><ul id="3"></ul><ul id="4"></ul><ul id="1"></ul><ul id="2"></ul><ul id="3"></ul><ul id="4"></ul><ul id="8"></ul><ul id="1"></ul><ul id="2"></ul><ul id="3"></ul><ul id="4"></ul><ul id="8"></ul><ul id="9"></ul><ul id="1"><li>Provided customers and users of various software systems the information needed regarding maintenance requirements to qualify for OEM warranties and to follow industry best practices.</li></ul><ul id="2"><li>Coded customized applications for users to convert raw data from design engine to easily understood graphics</li></ul><ul id="3"><li>Assisted client stakeholders by collaborating with support team to explain, troubleshoot, and resolve emergent technical issues.</li></ul><ul id="4"><li>Collaborated with database architects and administrators to outline client system limitations for capacity and load for [Type] data and processing projects.</li></ul><ul id="8"><li>Led a team of [Number] developers to analyse and reproduce software, from the earliest stages through to completion of task.</li></ul><ul id="9"><li>Created work schedules and solutions for debugging and fixing defects to resolve customer complaints and issues.</li></ul><ul id="10"><li>Supervised [Number] team members to resolve obstacles to projects by following company\'s best practices strategies.</li></ul>',
        },
      ],
      extra_activities: [
        {
          id: 49,
          heading_id: 635,
          function_title: 'Financial Analyst',
          employeer: 'Hcl',
          start_date: '2022-01-19T12:01:14.000Z',
          end_date: '2022-11-19T12:01:17.000Z',
          city: 'Delhi',
          currently_working_here: false,
          experience_description:
            '<ul id="1"></ul><ul id="1"></ul><ul id="3"></ul><ul id="1"></ul><ul id="3"></ul><ul id="4"></ul><ul id="1"></ul><ul id="3"></ul><ul id="4"></ul><ul id="5"></ul><ul id="1"></ul><ul id="3"></ul><ul id="4"></ul><ul id="5"></ul><ul id="6"></ul><ul id="1"><li>Provided customers and users of various software systems the information needed regarding maintenance requirements to qualify for OEM warranties and to follow industry best practices.</li></ul><ul id="3"><li>Assisted client stakeholders by collaborating with support team to explain, troubleshoot, and resolve emergent technical issues.</li></ul><ul id="4"><li>Collaborated with database architects and administrators to outline client system limitations for capacity and load for [Type] data and processing projects.</li></ul><ul id="5"><li>Directed and developed full life-cycle tests and trials of multiple software such as [Type]. </li></ul><ul id="6"><li>Controlled and directed installation of [Type] and [Type] software systems and explained new features of the design, purpose, and implementation to the team using the product.</li></ul><ul id="7"><li>Designed cross-platform software to increase serviceability and produced performance data.</li></ul>',
        },
      ],
      custom_blocks: null,
      driving_licences: {
        id: 61,
        heading_id: 635,
        driving_licence_category: 'FSD3445GR',
      },
    };
  }
  showModal: boolean;
totalPages: number = 1;
page: number = 1;
isLoaded: boolean = false;
nextPage() {
  this.page += 1;
}

previousPage() {
  this.page -= 1;
}

afterLoadComplete(pdfData: any) {
  this.totalPages = pdfData.numPages;
  this.isLoaded = true;
}
hide(){
this.showModal = false;
}
// --------------download----------------
downloadPdf() { 
   
  const pdf = new jsPDF({
    orientation: "p",
    unit: "pt",
    format: "a4", 
    putOnlyUsedFonts:true,
    
  });
  pdf.addFont("Arimo-Regular.ttf", "Arimo", "normal");
  pdf.addFont("Arimo-Bold.ttf", "Arimo", "bold");
  pdf.setFont("Arimo"); 
  pdf.setFontSize(28);
  pdf.addFont('https://pro.fontawesome.com/releases/v5.10.0/css/all.css', 'FontAwesome', 'normal', 'StandardEncoding');
  pdf.setFont('FontAwesome');
  // let pdf = new jsPDF("p", "pt", "a4");
  let el = this.screen.nativeElement;      
  pdf.html(el, {
    margin: [25, 15, 30, 5], 
    callback: (pdf) => {
      debugger
       // pdf.output("dataurlnewwindow"); 
     pdf.save("resume.pdf", {returnPromise:true});
    },
      // Adjust your margins here (top, right, bottom, left)
      // margin: [25, 15, 30, 5], 
   // padding: [10, 10, 10, 10], 
    html2canvas: {
      scale: 1,
       width:1000,  
       allowTaint:true
    },
  });
  // this.pdfsrc = pdf.output("dataurlstring"); 

}
loader:boolean=false;
// --------------download------pdf----------
pdfsrc: any;
downloadImage() {
  this.pdfsrc="",
  this.loader=true;
  this.showModal = true; 
  let el = this.screen.nativeElement;
  html2canvas(el, { allowTaint: true,useCORS: true}).then((canvas) => {
    let HTML_Width = canvas.width;
    let HTML_Height = canvas.height;
    let top_left_margin = 15;
    let PDF_Width = HTML_Width + top_left_margin * 2;
    let PDF_Height = PDF_Width * 1.5 + top_left_margin * 2;
    let canvas_image_width = HTML_Width;
    let canvas_image_height = HTML_Height;
    let totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;
    canvas.getContext("2d");
    let imgData = canvas.toDataURL("image/jpeg", 0.9); 
    let pdf = new jsPDF("p", "pt", [PDF_Width, PDF_Height]);
    pdf.addImage(
      imgData,
      "JPG",
      top_left_margin,
      top_left_margin,
      canvas_image_width,
      canvas_image_height
    );
    for (let i = 1; i <= totalPDFPages; i++) {
      pdf.addPage([PDF_Width, PDF_Height], "p");
      pdf.addImage(imgData, "JPG", top_left_margin,-(PDF_Height * i) + top_left_margin * 4, canvas_image_width, canvas_image_height );
    }
    this.pdfsrc = pdf.output("dataurlstring"); 
    this.loader=false;
    console.log(this.pdfsrc);
  });
 
}
  customClass = "";
  generatePDF() {

    /*
    let doc =  new jsPDF('p', 'pt', 'a4', true);
    const specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };
    
    doc.fromHTML(this.content.nativeElement, 10, 10, {
      'width': document.getElementById('cv').clientWidth, // max width of content on PDF
      'elementHandlers': specialElementHandlers
  },
  function(bla){doc.save('saveInCallback.pdf');});
  */

    /* var doc = new jsPDF();    
       doc.setLineWidth(1);    
       doc.setDrawColor(255, 0, 0); // draw red lines    
       doc.line(10, 10, 100,10,'S');    
       doc.save('graphics.pdf')
   */
    this.downloadByUrl();
    // var printDoc = new jsPDF();
    // printDoc.fromHTML($('#pdf').get(0), 10, 10, {
    //   'width': 180
    // });
    // printDoc.autoPrint();
    // printDoc.output("dataurlnewwindow");
  }
  downloadByUrl() {
    debugger
    //var url="http://makemyresume.co/final-resume/"+ this.data.heading.id;
    //var url ="https://sanushabalan.wordpress.com/2017/09/21/add-css-file-while-generating-pdf-using-itextsharp/";
    var html = this.content.nativeElement.innerHTML;
    var url = "https://margpay.com/mpay/login";
    var d = { Html: html, FileName: "test.pdf" };
    this.resuem.downloadPdf(d).subscribe((res: any) => {
      debugger
    //  alert(res);
      if (res.fileName) {
        var fileName = "http://pdf.rbntechnologies.com/temp/" + res.fileName;
       // alert(fileName);
        this.openFile(fileName);
      }
      // this.downloadReport("resume.pdf",res.Data);
    }, err => {

    });
  }
  openFile(fileName) {
    debugger
    var link = document.createElement('a');
    link.href = fileName;
    link.target = "_blank";
    link.click();
  }
  downloadReport(reportName, data) {
    // Base64Binary.decode(data);  
    // var resultByte = base64ToArrayBuffer(data);
    var bytes = this._base64ToArrayBuffer(data);// new Uint8Array(resultByte); // pass your byte response to this constructor
    var blob = new Blob([bytes], { type: "application/pdf" });// change resultByte to bytes
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = reportName;//"ClientItemwiseItemBalance.pdf";
    link.click();
  }
  _base64ToArrayBuffer(base64) {
    var binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
      bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
  }
}
 