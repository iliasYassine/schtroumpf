import { Component, OnInit } from '@angular/core';
import { SchtroumfService } from 'src/app/services/schtroumf.service';

@Component({
  selector: 'app-schtroumf-details',
  templateUrl: './schtroumf-details.component.html',
  styleUrls: ['./schtroumf-details.component.css']
})
export class SchtroumfDetailsComponent implements OnInit {

  constructor(private service:SchtroumfService){};
  schtroumfData:any={role:''};
  editMode = false;
  editedRole!: string;



  ngOnInit(): void {
    this.getSchtroumf();
  }



  updateSchtroumf(schtroumf: any): void {
    this.editMode = true;
    this.editedRole = schtroumf.role || '';
  }

  updateSchtroumfData(): void {
    const updatedSchtroumf = { ...this.schtroumfData, role: this.editedRole };
    this.service.update(this.schtroumfData.id, updatedSchtroumf).subscribe(() => {

    });
  }




  cancelEdit(): void {
    this.editMode = false;
    this.editedRole = '';
  }


  getSchtroumf():void{
    this.service.getAll().subscribe((res)=>{
      this.schtroumfData=res;

    });
  }

  createSchtroumf():void{

    const newSchtroumf={role:this.schtroumfData.role};
    this.service.create(newSchtroumf).subscribe(()=>{
      this.schtroumfData.role='';
      this.getSchtroumf();
    })
  }


  /// suppresion
  deleteSchtroumf(id:number): void {
    // Code pour supprimer un utilisateur
    this.service.delete(id).subscribe(() => {
      this.getSchtroumf(); // Mettre à jour la liste des role des schtroumf après la suppression
    });
  }

}
