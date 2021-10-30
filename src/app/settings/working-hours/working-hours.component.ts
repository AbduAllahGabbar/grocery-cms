import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingService } from '../setting.service';
import { UtilService } from '../../../service/util.service';

export interface WorkHourModel {
	deliveryTimeSlots: Array<WorkingHoursModel>;
	_id: string;
}

export interface WorkingHoursModel {
	timings: Array<TimeScheduleModel>;
	_id: string;
	dayCode: number;
	isOpen: boolean;
	date: string;
}

export interface TimeScheduleModel {
	_id?: string;
	slot: string;
	openTime: number;
	closeTime: number;
	deliveryCount: number;
	isOpen: boolean;
}

export interface TimeSlotListModel {
	time: string;
	minutes: number;
}


@Component({
	selector: 'app-working-hours',
	templateUrl: './working-hours.component.html',
	styleUrls: ['./working-hours.component.scss']
})
export class WorkingHourComponent implements OnInit {
	public isLoading: boolean = false;
	public timeSlots: Array<TimeSlotListModel> = [];			// contains list of 30 minute based slots
	public workingHours: WorkHourModel = {
		_id: null,
		deliveryTimeSlots: []
	};         // contains working hour data

	constructor(
		private router: Router,
		private utilService: UtilService,
		private settingService: SettingService
	) {
		this.getTimeSlotDropdownList();
		this.getWorkingHours();
	}

	// gets time slots dropdown values
	private getTimeSlotDropdownList(): void {
		this.settingService.getTimeSlotDropdownList().subscribe((res: any) => {
			this.timeSlots = res.response_data;
		});
	}

	ngOnInit() {
	}

	// Get working hours
	public getWorkingHours(): void {
		this.isLoading = true;
		this.settingService.getWorkingHours().subscribe((res: any) => {
			this.isLoading = false;
			this.workingHours = res.response_data;
		}, error => this.isLoading = false);
	}

	// Update slot open/close status
	public statusUpdate(data): void {
		data.isOpen = !data.isOpen;
	}

	// adds a new row in time schedule array
	public addNewTimeSchedule(index: number): void {
		const isInvalidData = this.workingHours.deliveryTimeSlots[index].timings.find(slot => slot.openTime === null || !slot.closeTime);
		if (isInvalidData) {
			return this.utilService.errorMessage('SLOT_FIELD_ERROR', true);
		}

		this.workingHours.deliveryTimeSlots[index].timings.push({
			openTime: null,
			closeTime: null,
			deliveryCount: null,
			isOpen: true,
			slot: ''
		});

	}

	// removes a time slot
	public removeTimeSchedule(workingHourIndex: number, index: number): void {
		if (index > 0) {
			this.workingHours.deliveryTimeSlots[workingHourIndex].timings.splice(index, 1);
		}
	}

	// Updates working hours
	public updateWorkingHours(): void {
		const unFilledData = this.workingHours.deliveryTimeSlots.find(working => working.timings.find(time => time.openTime === null || !time.closeTime));
		if (unFilledData) {
			return this.utilService.errorMessage('SLOT_FIELD_ERROR', true);
		}
		this.isLoading = true;
		this.settingService.updateWorkingHours(this.workingHours).subscribe((res: any) => {
			if (res.response_code === 200) {
				this.isLoading = false;
				this.utilService.successMessage(res.response_data);
				this.getWorkingHours();
			} else {
				this.utilService.errorMessage(res.response_data);
			}
		}, error => this.isLoading = false);
	}


}
